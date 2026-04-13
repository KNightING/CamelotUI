import { CamelotBaseElement } from '../base/CamelotBaseElement';
import './CamelotMaterialSelect';
import './CamelotCupertinoSelect';
import './CamelotSoftSelect';
import './CamelotScifiSelect';
/**
 * <CamelotSelect>
 * 通用下拉選單元件，由主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
export declare class CamelotSelect extends CamelotBaseElement {
    label: string;
    value: string;
    options: Array<{
        label: string;
        value: string;
    }>;
    disabled: boolean;
    color: 'primary' | 'secondary' | 'tertiary';
    private _isOpen;
    private _searchTerm;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onWindowClick;
    private _handleChanged;
    private _handleSearch;
    private _handleToggle;
    get filteredOptions(): {
        label: string;
        value: string;
    }[];
    render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-select': CamelotSelect;
    }
}
