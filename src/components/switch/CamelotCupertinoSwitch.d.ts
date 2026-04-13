import { LitElement } from 'lit';
export declare class CamelotCupertinoSwitch extends LitElement {
    checked: boolean;
    disabled: boolean;
    color: 'primary' | 'secondary' | 'tertiary';
    static styles: import("lit").CSSResult;
    private _toggle;
    render(): import("lit").TemplateResult<1>;
}
