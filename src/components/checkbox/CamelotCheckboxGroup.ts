import { LitElement, html, css } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { CamelotCheckbox } from './CamelotCheckbox';

/**
 * <CamelotCheckboxGroup>
 * 用於管理一組 CamelotCheckbox，收集多個選取值。
 */
@customElement('camelot-checkbox-group')
export class CamelotCheckboxGroup extends LitElement {
  /**
   * 選取值的陣列
   */
  @property({ type: Array })
  value: string[] = [];

  /**
   * 排列方向：'vertical' | 'horizontal'
   */
  @property({ type: String })
  orientation: 'vertical' | 'horizontal' = 'vertical';

  /**
   * 群組標籤 (標題)
   */
  @property({ type: String })
  label: string = '';

  /**
   * 色彩：'primary' | 'secondary' | 'tertiary'
   * 設定後將套用到所有子項目
   */
  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  /**
   * 是否整組禁用
   */
  @property({ type: Boolean })
  disabled: boolean = false;

  @queryAssignedElements({ selector: 'camelot-checkbox', flatten: true })
  private _checkboxes!: Array<CamelotCheckbox>;

  static styles = css`
    :host {
      display: block;
    }

    .group-label {
      font-family: var(--cml-font-family);
      font-size: 0.875rem;
      font-weight: var(--cml-font-weight-bold);
      color: var(--cml-color-on-surface-variant);
      margin-bottom: 8px;
      display: block;
    }

    .container {
      display: flex;
      gap: 12px;
    }

    .vertical {
      flex-direction: column;
      align-items: flex-start;
    }

    .horizontal {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
    }
  `;

  protected updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('value')) {
      this._updateChildren();
    }
    if (changedProperties.has('disabled') || changedProperties.has('color')) {
      this._syncChildrenProps();
    }
  }

  private _updateChildren() {
    this._checkboxes.forEach(cb => {
      cb.checked = this.value.includes(cb.value);
    });
  }

  private _syncChildrenProps() {
    this._checkboxes.forEach(cb => {
      if (this.disabled) cb.disabled = true;
      if (this.color) cb.color = this.color;
    });
  }

  private _handleSlotChange() {
    this._updateChildren();
    this._syncChildrenProps();
  }

  private _handleCheckboxChange(e: CustomEvent) {
    e.stopPropagation(); // 阻止子項目的 change 事件向上冒泡
    // 收集所有被選取的 Checkbox 值
    this.value = this._checkboxes
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      ${this.label ? html`<span class="group-label">${this.label}</span>` : ''}
      <div 
        class="container ${this.orientation}" 
        @change="${this._handleCheckboxChange}"
      >
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-checkbox-group': CamelotCheckboxGroup;
  }
}
