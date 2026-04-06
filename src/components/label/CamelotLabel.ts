import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
import './CamelotMaterialLabel';
import './CamelotCupertinoLabel';
import './CamelotSoftLabel';

/**
 * <CamelotLabel>
 * 核心標籤元件，負責根據目前的 UI 風格分流至對應的實作。
 */
@customElement('camelot-label')
export class CamelotLabel extends CamelotBaseElement {
  @property({ type: String })
  text: string = '';

  @property({ type: String })
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @property({ type: Boolean })
  required: boolean = false;

  @property({ type: String })
  for: string = '';

  render() {
    const commonProps = {
      text: this.text,
      color: this.color,
      required: this.required,
      for: this.for
    };

    switch (this._activeStyle) {
      case 'cupertino':
        return html`
          <camelot-cupertino-label 
            .text=${commonProps.text}
            .color=${commonProps.color}
            ?required=${commonProps.required}
            .for=${commonProps.for}
          ></camelot-cupertino-label>
        `;
      case 'soft':
        return html`
          <camelot-soft-label 
            .text=${commonProps.text}
            .color=${commonProps.color}
            ?required=${commonProps.required}
            .for=${commonProps.for}
          ></camelot-soft-label>
        `;
      case 'material':
      default:
        return html`
          <camelot-material-label 
            .text=${commonProps.text}
            .color=${commonProps.color}
            ?required=${commonProps.required}
            .for=${commonProps.for}
          ></camelot-material-label>
        `;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-label': CamelotLabel;
  }
}
