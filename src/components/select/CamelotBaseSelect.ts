import { property } from 'lit/decorators.js';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
import { CamelotSelectController, SelectOption } from './CamelotSelectController';

/**
 * CamelotBaseSelect
 * 選項選單的邏輯基礎類面。
 * 在這個版本中，我們使用 CamelotSelectController 作為邏輯核心。
 */
export class CamelotBaseSelect extends CamelotBaseElement {
  @property({ type: String }) label = '';
  @property({ type: Array }) options: SelectOption[] = [];
  @property({ type: String }) value = '';
  @property({ type: String }) placeholder = 'SELECT_OPTION';
  @property({ type: Boolean, reflect: true }) disabled = false;

  // 初始化邏輯控制器
  protected selectController = new CamelotSelectController(this);

  protected willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    super.willUpdate(changedProperties);
    
    // 同步屬性到控制器 (在 render 之前執行，確保第一次渲染就能抓到正確的 label)
    if (changedProperties.has('options')) this.selectController.options = this.options;
    if (changedProperties.has('value')) this.selectController.value = this.value;
  }
}
