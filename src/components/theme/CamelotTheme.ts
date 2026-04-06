import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { THEME_DEFAULT } from '../../styles/themes';
import type { CamelotThemeConfig } from '../../styles/themes';

/**
 * <CamelotTheme> 
 * 用於管理與局部覆蓋 CamelotUI 的主題與風格。
 * 支援多樣化風格 (material, cupertino, soft-ui) 與結構化配置 (Config)。
 */
@customElement('camelot-theme')
export class CamelotTheme extends LitElement {
  /**
   * 當前的 UI 風格：'material', 'cupertino', 'soft'
   */
  @property({ type: String, reflect: true })
  mode: 'material' | 'cupertino' | 'soft' = 'material';

  /**
   * 強制設定主題色模式：'light', 'dark', 或 'auto' (隨系統)
   */
  @property({ type: String, reflect: true })
  theme: 'light' | 'dark' | 'auto' = 'auto';

  /**
   * 結構化配置物件。
   * 支援格式: { color: {}, font: {}, spacing: {}, radius: {}, light: {}, dark: {} }
   */
  @property({ type: Object })
  config?: CamelotThemeConfig;

  private _darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  static styles = css`
    :host {
      display: block;
    }

    .theme-container {
      display: contents;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this._darkMediaQuery.addEventListener('change', this._handleSystemThemeChange);
    this._applyPalette(); 
  }

  disconnectedCallback() {
    this._darkMediaQuery.removeEventListener('change', this._handleSystemThemeChange);
    super.disconnectedCallback();
  }

  private _handleSystemThemeChange = () => {
    if (this.theme === 'auto') {
      this._applyPalette();
    }
  };

  protected updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('mode')) {
      this.style.setProperty('--cml-active-ui-style', `"${this.mode}"`);
      window.dispatchEvent(new CustomEvent('camelot-theme-changed', {
        detail: { mode: this.mode },
        bubbles: true,
        composed: true
      }));
    }

    if (changedProperties.has('theme') || changedProperties.has('config')) {
      this._applyPalette();
    }
  }

  private _applyPalette() {
    const hasThemeAttr = this.hasAttribute('theme');
    const hasConfig = this.config !== undefined;
    const parentTheme = this.parentElement?.closest('camelot-theme');
    const isRoot = !parentTheme;

    // 取得基底配置：
    // 1. 根主題：若無自定義 config 則回歸 THEME_DEFAULT (系統基準)
    // 2. 嵌套主題：若無自定義 config 則為空物件 (實現增量覆蓋與純繼承)
    const baseConfig: CamelotThemeConfig = this.config || (isRoot ? THEME_DEFAULT : {});
    
    let effectiveTheme: 'light' | 'dark' = 'light';
    if (this.theme === 'auto') {
      effectiveTheme = this._darkMediaQuery.matches ? 'dark' : 'light';
    } else {
      effectiveTheme = this.theme;
    }

    // 合併該主題下「基礎層」與「模式特定層 (light/dark)」的配置
    const modeConfig = (baseConfig as any)[effectiveTheme] || {};
    const finalConfig: any = {
      color: { ...(baseConfig.color || {}), ...(modeConfig.color || {}) },
      font: { ...(baseConfig.font || {}), ...(modeConfig.font || {}) },
      spacing: { ...(baseConfig.spacing || {}), ...(modeConfig.spacing || {}) },
      radius: { ...(baseConfig.radius || {}), ...(modeConfig.radius || {}) },
      soft: { ...(baseConfig.soft || {}), ...(modeConfig.soft || {}) },
    };

    // 注入策略：根主題寫入 :root，嵌套主題寫入自身 style
    const target = isRoot ? (document.documentElement.style as any) : (this.style as any);

    // 繼承決策：若為嵌套主題且完全無手動配置，強行清除本地變數以確保 100% 继承
    if (!isRoot && !hasThemeAttr && !hasConfig) {
      this._clearAllProperties();
      return;
    }

    // 執行注入 (遍歷 finalConfig 並應用變數)
    this._injectSection(target, 'color', finalConfig.color);
    this._injectSection(target, 'font', finalConfig.font);
    this._injectSection(target, 'spacing', finalConfig.spacing);
    this._injectSection(target, 'radius', finalConfig.radius);
    this._injectSection(target, 'soft', finalConfig.soft);
  }

  private _injectSection(target: any, section: string, data?: any) {
    if (!data) return;
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== '') {
        target.setProperty(`--cml-${section}-${key}`, String(value));
      }
    });
  }

  private _clearAllProperties() {
    // 遍歷當前 style 並移除所有以 --cml- 開頭的屬性，重置繼承
    const style: any = this.style;
    for (let i = 0; i < style.length; i++) {
      const prop = style[i];
      if (prop.startsWith('--cml-')) {
        style.removeProperty(prop);
      }
    }
  }

  render() {
    return html`
      <div class="theme-container">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camelot-theme': CamelotTheme;
  }
}
