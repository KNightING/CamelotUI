import { LitElement } from 'lit';
export declare class CamelotMaterialSwitch extends LitElement {
    checked: boolean;
    disabled: boolean;
    color: 'primary' | 'secondary' | 'tertiary';
    static styles: import("lit").CSSResult;
    private _toggle;
    render(): import("lit").TemplateResult<1>;
}
