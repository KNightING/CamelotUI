import { CamelotBaseElement } from '../base/CamelotBaseElement';
import './CamelotMaterialBadge';
import './CamelotCupertinoBadge';
import './CamelotSoftBadge';
import './CamelotScifiBadge';
/**
 * <CamelotBadge>
 * 通用標籤元件，根據主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
export declare class CamelotBadge extends CamelotBaseElement {
    label: string;
    color: 'primary' | 'secondary' | 'tertiary' | 'error' | 'success';
    variant: 'filled' | 'outlined';
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
}
