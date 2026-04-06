import { LitElement, html, css } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { CamelotRadio } from './CamelotRadio';

/**
 * <CamelotRadioGroup>
 * 用於管理一組 CamelotRadio，確保單選邏輯。
 */
@customElement('camelot-radio-group')
export class CamelotRadioGroup extends LitElement {
  /**
   * 目前選取的值
   */
  @property({ type: String, reflect: true })
  value: string = '';

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

  @queryAssignedElements({ selector: 'camelot-radio', flatten: true })
  private _radios!: Array<CamelotRadio>;

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
    this._radios.forEach(radio => {
      radio.checked = radio.value === this.value;
    });
  }

  private _syncChildrenProps() {
    this._radios.forEach(radio => {
      if (this.disabled) radio.disabled = true;
      if (this.color) radio.color = this.color;
    });
  }

  private _handleSlotChange() {
    this._updateChildren();
    this._syncChildrenProps();
  }

  private _handleRadioChange(e: CustomEvent) {
    e.stopPropagation(); // 阻止子項目的 change 事件向上冒泡
    const target = e.target as CamelotRadio;
    if (target.checked) {
      this.value = target.value;
      
      // 手動更新其他 Radio 的狀態（因為 reflect 可能有延遲或不會自動連動）
      this._radios.forEach(radio => {
        if (radio !== target) {
          radio.checked = false;
        }
      });

      this.dispatchEvent(new CustomEvent('change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true
      }));
    }
  }

  render() {
    return html`
      ${this.label ? html`<span class="group-label">${this.label}</span>` : ''}
      <div class="container ${this.orientation}" @change="${this._handleRadioChange}">
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-radio-group': CamelotRadioGroup;
  }
}
