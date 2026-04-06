import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
import './CamelotBaseDialog';
import './CamelotMaterialConfirmDialog';
import './CamelotCupertinoConfirmDialog';
import './CamelotSoftConfirmDialog';

/**
 * <CamelotConfirmDialog>
 * 確認對話框分流器。根據主題渲染 Material, Cupertino 或 Soft UI 的確認視窗。
 */
@customElement('camelot-confirm-dialog')
export class CamelotConfirmDialog extends CamelotBaseElement {
  @property({ type: String })
  title: string = '';

  @property({ type: String })
  message: string = '';

  @property({ type: String })
  confirmText: string = '確定';

  @property({ type: String })
  cancelText: string = '取消';

  @property({ type: Boolean, reflect: true })
  open: boolean = false;

  show() {
    this.open = true;
  }

  hide() {
    this.open = false;
  }

  private _onConfirm() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('confirm', { bubbles: true, composed: true }));
  }

  private _onCancel() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
  }

  render() {
    const commonProps = {
      title: this.title,
      message: this.message,
      confirmText: this.confirmText,
      cancelText: this.cancelText,
      open: this.open
    };

    switch (this._activeStyle) {
      case 'cupertino':
        return html`
          <camelot-cupertino-confirm-dialog
            .title=${commonProps.title}
            .message=${commonProps.message}
            .confirmText=${commonProps.confirmText}
            .cancelText=${commonProps.cancelText}
            ?open=${commonProps.open}
            @confirm=${this._onConfirm}
            @cancel=${this._onCancel}
          ></camelot-cupertino-confirm-dialog>
        `;
      case 'soft':
        return html`
          <camelot-soft-confirm-dialog
            .title=${commonProps.title}
            .message=${commonProps.message}
            .confirmText=${commonProps.confirmText}
            .cancelText=${commonProps.cancelText}
            ?open=${commonProps.open}
            @confirm=${this._onConfirm}
            @cancel=${this._onCancel}
          ></camelot-soft-confirm-dialog>
        `;
      case 'material':
      default:
        return html`
          <camelot-material-confirm-dialog
            .title=${commonProps.title}
            .message=${commonProps.message}
            .confirmText=${commonProps.confirmText}
            .cancelText=${commonProps.cancelText}
            ?open=${commonProps.open}
            @confirm=${this._onConfirm}
            @cancel=${this._onCancel}
          ></camelot-material-confirm-dialog>
        `;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-confirm-dialog': CamelotConfirmDialog;
  }
}
