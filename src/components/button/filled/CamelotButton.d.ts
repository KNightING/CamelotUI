import { CamelotBaseElement } from '../../base/CamelotBaseElement';
import './CamelotMaterialFilledButton';
import './CamelotCupertinoFilledButton';
import './CamelotSoftFilledButton';
import './CamelotScifiFilledButton';
/**
 * <CamelotButton>
 * 通用實心按鈕元件 (Filled Button)，根據主題切換風格。
 */
export declare class CamelotButton extends CamelotBaseElement {
    label: string;
    disabled: boolean;
    color: 'primary' | 'secondary' | 'tertiary';
    render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-button': CamelotButton;
    }
}
