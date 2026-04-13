import { LitElement } from 'lit';
import '../label/CamelotLabel';
export declare class CamelotCupertinoCheckbox extends LitElement {
    label: string;
    checked: boolean;
    disabled: boolean;
    color: 'primary' | 'secondary' | 'tertiary';
    /**
     * 勾選框形狀：'square' (預設，圓角正方形) 或 'circle' (圓形)
     */
    shape: 'square' | 'circle';
    static styles: import("lit").CSSResult;
    private _toggle;
    render(): import("lit").TemplateResult<1>;
}
