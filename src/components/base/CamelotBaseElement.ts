import { LitElement } from 'lit';
import { state } from 'lit/decorators.js';

/**
 * CamelotBaseElement 基礎類別
 * 封裝了所有 CamelotUI 組件共用的底層邏輯，包括：
 * 1. 自動偵測主題風格 (優先從 DOM 樹尋找 camelot-theme)
 * 2. 監控全域主題變更事件 (camelot-theme-changed)
 * 3. 管理 _activeStyle 狀態，供子組件進行風格分流
 * 
 * 優化筆記：
 * - 移除 updated() 中的偵測，避免觸發 Layout Thrashing (Reflow)。
 * - 僅在元件連接 (connected) 或主題顯式變更時更新狀態。
 */
export class CamelotBaseElement extends LitElement {
  /**
   * 當前的 UI 風格：'material', 'cupertino', 'soft', 'scifi'
   */
  @state()
  protected _activeStyle: string = 'material';

  private _themeChangeListener = () => {
    // 當全域主題發生變動時，所有元件重新掃描「自己」所屬的 Theme Context。
    // 這能確保在同一個頁面中，Material 與 Soft UI 主題可以各自獨立工作，互不干擾。
    this._updateActiveStyle();
  };

  connectedCallback() {
    super.connectedCallback();
    this._updateActiveStyle();
    window.addEventListener('camelot-theme-changed', this._themeChangeListener);
  }

  disconnectedCallback() {
    window.removeEventListener('camelot-theme-changed', this._themeChangeListener);
    super.disconnectedCallback();
  }

  /**
   * 偵測目前的 UI 風格
   * 此方法應謹慎呼叫，因為 getComputedStyle 可能觸發重排。
   */
  protected _updateActiveStyle() {
    // 優先權 1: 尋找最近的 camelot-theme 元件 (快速，不觸發排版)
    const themeParent = this.closest('camelot-theme') as any;
    if (themeParent && themeParent.mode) {
      if (this._activeStyle !== themeParent.mode) {
        this._activeStyle = themeParent.mode;
      }
      return;
    }

    // 優先權 2: 從 CSS 變數中讀取目前的 UI 風格 (作為備援，儘量少用)
    const style = getComputedStyle(this)
      .getPropertyValue('--cml-active-ui-style')
      .replace(/"/g, '')
      .trim();

    if (style && style !== this._activeStyle) {
      this._activeStyle = style;
    }
  }
}
