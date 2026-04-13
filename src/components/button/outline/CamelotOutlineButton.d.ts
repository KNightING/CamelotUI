import { CamelotBaseElement } from '../../base/CamelotBaseElement';
import './CamelotMaterialOutlineButton';
import './CamelotCupertinoOutlineButton';
import './CamelotSoftOutlineButton';
import './CamelotScifiOutlineButton';
/**
 * <CamelotOutlineButton>
 * 通用邊框按鈕元件 (Outline Button)，根據主題切換風格。
 */
export declare class CamelotOutlineButton extends CamelotBaseElement {
    label: string;
    disabled: boolean;
    color: 'primary' | 'secondary' | 'tertiary';
    render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-outline-button': CamelotOutlineButton;
    }
}
