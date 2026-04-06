import { LitElement } from 'lit';
import { state } from 'lit/decorators.js';

/**
 * CamelotBaseElement 基礎類別
 * 封裝了所有 CamelotUI 組件共用的底層邏輯，包括：
 * 1. 自動偵測主題風格 (--cml-active-ui-style)
 * 2. 監控全域主題變更事件
 * 3. 管理 _activeStyle 狀態，供子組件進行風格分流
 */
export class CamelotBaseElement extends LitElement {
  /**
   * 當前的 UI 風格：'material', 'cupertino', 'soft'
   */
  @state()
  protected _activeStyle: string = 'material';

  private _themeChangeListener = () => this._updateActiveStyle();

  connectedCallback() {
    super.connectedCallback();
    this._updateActiveStyle();
    window.addEventListener('camelot-theme-changed', this._themeChangeListener);
  }

  disconnectedCallback() {
    window.removeEventListener('camelot-theme-changed', this._themeChangeListener);
    super.disconnectedCallback();
  }

  protected updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    // 每次組件更新時執行一次偵測，確保變數異動時能即時反應
    this._updateActiveStyle();
  }

  /**
   * 從 CSS 變數中讀取目前的 UI 風格
   */
  protected _updateActiveStyle() {
    const style = getComputedStyle(this)
      .getPropertyValue('--cml-active-ui-style')
      .replace(/"/g, '')
      .trim();

    if (style && style !== this._activeStyle) {
      this._activeStyle = style;
    }
  }
}
