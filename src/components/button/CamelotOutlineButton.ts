import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
import './CamelotButton.ts';

/**
 * <CamelotOutlineButton>
 * 快捷元件：具備邊框樣式的按鈕。
 * 這是 <camelot-button variant="outlined"> 的捷徑。
 */
@customElement('camelot-outline-button')
export class CamelotOutlineButton extends CamelotBaseElement {
  @property({ type: String })
  label: string = 'Outline Button';

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  render() {
    return html`
      <camelot-button 
        .label=${this.label}
        .color=${this.color}
        variant="outlined"
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </camelot-button>
    `;
  }

  static styles = css`
    :host {
      display: inline-block;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-outline-button': CamelotOutlineButton;
  }
}
