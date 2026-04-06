import { LitElement } from 'lit';
import { state } from 'lit/decorators.js';

/**
 * CamelotBaseElement 基礎類別
 * 封裝了所有 CamelotUI 組件共用的底層邏輯，包括：
 * 1. 自動偵測主題風格 (優先從 DOM 樹尋找 camelot-theme，次之從 CSS 變數偵測)
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

  protected firstUpdated() {
    // 首幀完成後再次強制檢查，確保 CSS 變數已完全傳遞
    this._updateActiveStyle();
  }

  /**
   * 偵測目前的 UI 風格
   */
  protected _updateActiveStyle() {
    // 優先權 1: 尋找最近的 camelot-theme 元件
    const themeParent = this.closest('camelot-theme') as any;
    if (themeParent && themeParent.mode) {
      if (this._activeStyle !== themeParent.mode) {
        this._activeStyle = themeParent.mode;
      }
      return;
    }

    // 優先權 2: 從 CSS 變數中讀取目前的 UI 風格 (作為備援)
    const style = getComputedStyle(this)
      .getPropertyValue('--cml-active-ui-style')
      .replace(/"/g, '')
      .trim();

    if (style && style !== this._activeStyle) {
      this._activeStyle = style;
    }
  }
}
