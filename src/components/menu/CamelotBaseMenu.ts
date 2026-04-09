import { html, css, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
import { MenuOption } from './MenuOption';

/**
 * <CamelotBaseMenu>
 * 選單基底組件，處理資料渲染邏輯與狀態管理。
 */
export class CamelotBaseMenu extends CamelotBaseElement {
  @property({ type: Array }) options: MenuOption[] = [];
  @property({ type: String, reflect: true }) value: string = '';
  @property({ type: Boolean, reflect: true }) collapsed = false;
  @property({ type: String, reflect: true }) mode: 'vertical' | 'horizontal' = 'vertical';
  @property({ type: Number }) indent = 24;

  @state() protected _expandedKeys: Set<string> = new Set();
  @state() protected _activePathKeys: Set<string> = new Set();

  protected updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('value') || changedProperties.has('options')) {
      this._updateActivePath();
    }
  }

  private _updateActivePath() {
    const path = new Set<string>();
    if (this.value) {
      this._findActivePath(this.options, this.value, path);
    }
    this._activePathKeys = path;
  }

  private _findActivePath(options: MenuOption[], targetKey: string, path: Set<string>): boolean {
    for (const option of options) {
      if (option.key === targetKey) return true;
      if (option.children && option.children.length > 0) {
        if (this._findActivePath(option.children, targetKey, path)) {
          path.add(option.key);
          return true;
        }
      }
    }
    return false;
  }

  protected _toggleExpand(key: string, e: Event) {
    e.stopPropagation();
    const newKeys = new Set(this._expandedKeys);
    if (newKeys.has(key)) newKeys.delete(key);
    else newKeys.add(key);
    this._expandedKeys = newKeys;
  }

  protected _handleSelect(key: string, e: Event) {
    e.stopPropagation();
    this.value = key;
    this.dispatchEvent(new CustomEvent('select', { detail: key, bubbles: true, composed: true }));
    this.dispatchEvent(new CustomEvent('update:value', { detail: key, bubbles: true, composed: true }));
  }

  protected renderMenu(options: MenuOption[], level = 0): TemplateResult {
    return html`
      <div class="menu-list level-${level} ${level === 0 ? 'level-0' : ''}">
        ${options.map(option => this.renderItem(option, level))}
      </div>
    `;
  }

  protected renderItem(option: MenuOption, level: number): TemplateResult {
    const hasChildren = option.children && option.children.length > 0;
    const isExpanded = this._expandedKeys.has(option.key);
    const isSelected = this.value === option.key;
    const isActiveParent = this._activePathKeys.has(option.key);
    const isAccordion = hasChildren && this.mode === 'vertical' && !this.collapsed;

    const itemContent = html`
      <div 
        class="menu-item"
        @click="${(e: Event) => !isAccordion && (hasChildren ? this._toggleExpand(option.key, e) : this._handleSelect(option.key, e))}"
      >
        <div class="menu-item-indent" style="width: ${level * this.indent}px"></div>
        ${option.icon ? html`<div class="menu-item-icon">${this.renderIcon(option.icon)}</div>` : ''}
        <div class="menu-item-label">${option.label}</div>
        ${hasChildren ? html`
          <div class="menu-item-arrow">
            ${(this.mode === 'vertical' && !this.collapsed) 
              ? this.renderArrow(isExpanded) 
              : ((this.mode === 'horizontal' || this.collapsed) && level > 0)
                ? this.renderArrow(isExpanded, true)
                : ''}
          </div>
        ` : ''}
      </div>
    `;

    if (isAccordion) {
      return html`
        <div 
          class="menu-item-container ${isSelected ? 'is-selected' : ''} ${isActiveParent ? 'is-active-parent' : ''} ${isExpanded ? 'is-expanded' : ''} ${option.disabled ? 'is-disabled' : ''}"
        >
          <camelot-expand 
            .expanded="${isExpanded}" 
            @toggle="${(e: any) => this._toggleExpand(option.key, e)}"
          >
            ${itemContent}
            <div slot="body" class="menu-item-children">
              ${this.renderMenu(option.children!, level + 1)}
            </div>
          </camelot-expand>
        </div>
      `;
    }

    return html`
      <div 
        class="menu-item-container ${isSelected ? 'is-selected' : ''} ${isActiveParent ? 'is-active-parent' : ''} ${isExpanded ? 'is-expanded' : ''} ${option.disabled ? 'is-disabled' : ''}"
        style="--level: ${level}"
      >
        ${itemContent}
        ${hasChildren ? html`
          <div class="menu-item-children" ?hidden="${this.mode === 'vertical' && !this.collapsed && !isExpanded}">
            ${this.renderMenu(option.children!, level + 1)}
          </div>
        ` : ''}
      </div>
    `;
  }

  protected renderIcon(iconName: string): TemplateResult {
    return html`<span class="icon">${iconName}</span>`;
  }

  protected renderArrow(isExpanded: boolean, isRight = false): TemplateResult {
    if (isRight) return html`<span class="arrow">▶</span>`;
    return html`<span class="arrow">${isExpanded ? '▼' : '▶'}</span>`;
  }

  render() {
    return html`
      <div class="camelot-menu-root ${this.collapsed ? 'is-collapsed' : ''}">
        ${this.renderMenu(this.options)}
      </div>
    `;
  }

  static styles = [
    css`
      :host { display: block; width: 100%; user-select: none; position: relative; }

      :host([collapsed]) {
        width: fit-content !important;
      }

      .camelot-menu-root.is-collapsed {
        width: fit-content;
      }

      /* Horizontal Layout Fix */
      :host([mode="horizontal"]) .camelot-menu-root > .menu-list.level-0 {
        flex-direction: row !important;
        width: 100% !important;
        flex-wrap: nowrap;
        overflow: visible;
      }
      :host([mode="horizontal"]) .camelot-menu-root > .menu-list.level-0 > .menu-item-container {
        width: auto !important;
        flex-shrink: 0;
      }

      /* Popover Logic for Horizontal & Collapsed */
      :host([mode="horizontal"]) .menu-item-container:hover > .menu-item-children,
      :host([collapsed]) .menu-item-container:hover > .menu-item-children {
        display: block !important;
        opacity: 1;
        margin: 0px 1px;
        visibility: visible;
      }

      :host([mode="horizontal"]) .menu-item-children,
      :host([collapsed]) .menu-item-children {
        position: absolute;
        z-index: 1000;
        min-width: 200px;
        display: none;
      }

      /* Popover Initial Positioning */
      :host([mode="horizontal"]) .camelot-menu-root > .menu-list.level-0 > .menu-item-container > .menu-item-children {
        top: 100% !important;
        left: 0 !important;
      }

      /* Recursive Popovers (N-level) */
      :host([collapsed]) .menu-item-children,
      :host([mode="horizontal"]) .menu-item-children .menu-item-children {
        left: 100% !important;
        top: 0 !important;
      }

      /* Collapsed Mode: Root Level Label Hiding */
      :host([collapsed]) .camelot-menu-root > .menu-list.level-0 > .menu-item-container > .menu-item .menu-item-label,
      :host([collapsed]) .camelot-menu-root > .menu-list.level-0 > .menu-item-container > .menu-item .menu-item-arrow,
      :host([collapsed]) .camelot-menu-root > .menu-list.level-0 > .menu-item-container > .menu-item .menu-item-indent {
        display: none !important;
      }

      /* Display labels in Popovers */
      :host([collapsed]) .menu-item-children .menu-item-label,
      :host([mode="horizontal"]) .menu-item-children .menu-item-label {
        display: block !important;
      }

      /* Hide Indentation in Popovers (already handled by popout hierarchy) */
      :host([collapsed]) .menu-item-children .menu-item-indent,
      :host([mode="horizontal"]) .menu-item-children .menu-item-indent {
        display: none !important;
        width: 0 !important;
      }

      .menu-list { display: flex; flex-direction: column; width: 100%; }
      .menu-item-container { width: 100%; position: relative; }
      
      /* Reset Expand Header for Menu integration */
      camelot-expand::part(header) {
        padding: 0;
        background: transparent;
      }
      camelot-expand::part(header):hover {
        background: transparent;
      }

      .menu-item { display: flex; align-items: center; cursor: pointer; min-height: 48px; padding: 0 16px; box-sizing: border-box; }
      .menu-item-label { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .menu-item-icon { display: flex; align-items: center; justify-content: center; width: 24px; margin-right: 12px; }
      .menu-item-indent { flex-shrink: 0; }
      .menu-item-children { overflow: visible;  }
      [hidden] { display: none !important; }
    `
  ];
}
