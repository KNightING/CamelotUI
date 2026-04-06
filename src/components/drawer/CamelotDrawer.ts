import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

import './CamelotMaterialDrawer';
import './CamelotCupertinoDrawer';
import './CamelotSoftDrawer';

/**
 * <CamelotDrawer>
 * 抽屜元件的門面 (Facade)，根據當前主題風格自動渲染對應的實作。
 */
export class CamelotDrawer extends CamelotBaseElement {
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String, reflect: true }) anchor: 'left' | 'right' | 'top' | 'bottom' = 'left';
  @property({ type: String }) label?: string;
  @property({ type: String }) headline?: string;

  /**
   * 開啟抽屜
   */
  show() {
    this.open = true;
  }

  /**
   * 關閉抽屜
   */
  hide() {
    this.open = false;
  }

  private _handleCancel() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
  }

  private _handleOpen() {
    this.dispatchEvent(new CustomEvent('open', { bubbles: true, composed: true }));
  }

  private _handleClose() {
    this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
  }

  render() {
    // 根據 _activeStyle 選擇對應的組件標籤
    switch (this._activeStyle) {
      case 'cupertino':
        return html`
          <camelot-cupertino-drawer
            .open="${this.open}"
            .anchor="${this.anchor}"
            .label="${this.label || ''}"
            @cancel="${this._handleCancel}"
            @open="${this._handleOpen}"
            @close="${this._handleClose}"
          >
            <slot></slot>
            <slot name="footer" slot="footer"></slot>
          </camelot-cupertino-drawer>
        `;
      case 'soft':
        return html`
          <camelot-soft-drawer
            .open="${this.open}"
            .anchor="${this.anchor}"
            .label="${this.label || this.headline || ''}"
            @cancel="${this._handleCancel}"
            @open="${this._handleOpen}"
            @close="${this._handleClose}"
          >
            <slot></slot>
            <slot name="header-actions" slot="header-actions"></slot>
            <slot name="footer" slot="footer"></slot>
          </camelot-soft-drawer>
        `;
      case 'material':
      default:
        return html`
          <camelot-material-drawer
            .open="${this.open}"
            .anchor="${this.anchor}"
            .headline="${this.headline || this.label || ''}"
            @cancel="${this._handleCancel}"
            @open="${this._handleOpen}"
            @close="${this._handleClose}"
          >
            <slot name="header" slot="header"></slot>
            <slot></slot>
            <slot name="footer" slot="footer"></slot>
          </camelot-material-drawer>
        `;
    }
  }
}

customElements.define('camelot-drawer', CamelotDrawer);
