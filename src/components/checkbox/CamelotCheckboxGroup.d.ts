import { LitElement } from 'lit';
/**
 * <CamelotCheckboxGroup>
 * 用於管理一組 CamelotCheckbox，收集多個選取值。
 */
export declare class CamelotCheckboxGroup extends LitElement {
    /**
     * 選取值的陣列
     */
    value: string[];
    /**
     * 排列方向：'vertical' | 'horizontal'
     */
    orientation: 'vertical' | 'horizontal';
    /**
     * 群組標籤 (標題)
     */
    label: string;
    /**
     * 色彩：'primary' | 'secondary' | 'tertiary'
     * 設定後將套用到所有子項目
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
     * 是否整組禁用
     */
    disabled: boolean;
    private _checkboxes;
    static styles: import("lit").CSSResult;
    protected updated(changedProperties: Map<string | number | symbol, unknown>): void;
    private _updateChildren;
    private _syncChildrenProps;
    private _handleSlotChange;
    private _handleCheckboxChange;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-checkbox-group': CamelotCheckboxGroup;
    }
}
