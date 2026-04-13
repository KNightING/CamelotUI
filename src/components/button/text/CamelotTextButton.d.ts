import { CamelotBaseElement } from '../../base/CamelotBaseElement';
import './CamelotMaterialTextButton';
import './CamelotCupertinoTextButton';
import './CamelotSoftTextButton';
import './CamelotScifiTextButton';
/**
 * <CamelotTextButton>
 * 通用文字按鈕元件 (Text Button)，根據主題切換風格。
 */
export declare class CamelotTextButton extends CamelotBaseElement {
    label: string;
    disabled: boolean;
    color: 'primary' | 'secondary' | 'tertiary';
    render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-text-button': CamelotTextButton;
    }
}
