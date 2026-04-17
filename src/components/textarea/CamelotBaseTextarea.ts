import { property } from 'lit/decorators.js';
import { CamelotBaseInput } from '../input/CamelotBaseInput';

/**
 * CamelotBaseTextarea
 * 所有長文字輸入框元件的邏輯基礎類別。
 * 繼承自 CamelotBaseInput，並增加 rows 屬性。
 */
export class CamelotBaseTextarea extends CamelotBaseInput {
  @property({ type: Number }) rows = 4;
}
