import { property, state } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';

/**
 * CamelotScifiBase
 * 所有 Sci-fi HUD 風格元件的基礎類別。
 * 統一管理主題色彩、禁用狀態與 Focus/Active 狀態。
 * 
 * 整合筆記：
 * - 繼承自 CamelotBaseElement，共享 current-color 映射邏輯。
 */
export abstract class CamelotScifiBase extends CamelotBaseElement {
  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: Boolean, reflect: true })
  showShine: boolean = false;

  @property({ type: Boolean, reflect: true })
  showReticle: boolean = false;

  @state() protected _isHovered = false;
  @state() protected _isFocused = false;
  @state() protected _isActive = false;

  protected updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    
    // 橋接傳統的 --cml-scifi-color 到新的 --cml-color-current-color
    // 這樣舊有的 Sci-fi 組件無需修改 CSS 即可繼續運作
    this.style.setProperty('--cml-scifi-color', 'var(--cml-color-current-color)');

    // 反映狀態到 Host 屬性，供 CSS 選擇器使用
    if (this._isHovered) this.setAttribute('hovered', ''); else this.removeAttribute('hovered');
    if (this._isFocused) this.setAttribute('focused', ''); else this.removeAttribute('focused');
    if (this._isActive) this.setAttribute('filled', ''); else this.removeAttribute('filled');
  }

  protected _handleFocus() {
    if (this.disabled) return;
    this._isFocused = true;
  }

  protected _handleBlur() {
    this._isFocused = false;
  }

  protected _handleMouseEnter() {
    if (this.disabled) return;
    this._isHovered = true;
  }

  protected _handleMouseLeave() {
    this._isHovered = false;
  }
}
