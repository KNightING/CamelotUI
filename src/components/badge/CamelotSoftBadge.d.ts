import { LitElement } from 'lit';
export declare class CamelotSoftBadge extends LitElement {
    label: string;
    color: 'primary' | 'secondary' | 'tertiary' | 'error' | 'success';
    variant: 'filled' | 'outlined';
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
}
