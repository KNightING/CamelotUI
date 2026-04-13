import { LitElement } from 'lit';
export declare class CamelotMaterialTabs extends LitElement {
    items: Array<{
        label: string;
        value: string;
    }>;
    value: string;
    color: 'primary' | 'secondary' | 'tertiary';
    static styles: import("lit").CSSResult;
    private _select;
    render(): import("lit").TemplateResult<1>;
}
