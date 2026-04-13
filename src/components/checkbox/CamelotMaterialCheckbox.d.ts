import { LitElement } from 'lit';
import '../label/CamelotLabel';
export declare class CamelotMaterialCheckbox extends LitElement {
    label: string;
    checked: boolean;
    disabled: boolean;
    color: 'primary' | 'secondary' | 'tertiary';
    static styles: import("lit").CSSResult;
    private _toggle;
    render(): import("lit").TemplateResult<1>;
}
