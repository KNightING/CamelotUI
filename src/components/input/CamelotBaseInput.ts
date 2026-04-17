import { property, state } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

/**
 * CamelotBaseInput
 * 所有輸入框元件的邏輯基礎類別。
 * 統一管理 label, value, placeholder, disabled 等屬性與 Focus 狀態。
 */
export class CamelotBaseInput extends CamelotBaseElement {
  @property({ type: String }) label = '';
  @property({ type: String }) value = '';
  @property({ type: String }) placeholder = '';
  @property({ type: String }) type = 'text';
  @property({ type: String }) error = '';
  @property({ type: Boolean, reflect: true }) disabled = false;

  @state() protected _isFocused = false;

  protected updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    // 反映狀態到 Host 屬性，供 CSS 選擇器使用
    if (this._isFocused) this.setAttribute('focused', ''); else this.removeAttribute('focused');
  }

  protected _handleFocus() {
    if (this.disabled) return;
    this._isFocused = true;
  }

  protected _handleBlur() {
    this._isFocused = false;
  }

  protected _handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this.dispatchEvent(new CustomEvent('input', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }
}
