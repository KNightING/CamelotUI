import { LitElement } from 'lit';
import '../label/CamelotLabel';
export declare class CamelotCupertinoRadio extends LitElement {
    checked: boolean;
    disabled: boolean;
    label: string;
    color: 'primary' | 'secondary' | 'tertiary';
    static styles: import("lit").CSSResult;
    private _toggle;
    render(): import("lit").TemplateResult<1>;
}
