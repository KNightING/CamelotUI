import { LitElement } from 'lit';
import '../label/CamelotLabel';
export declare class CamelotSoftSelect extends LitElement {
    label: string;
    value: string;
    options: Array<{
        label: string;
        value: string;
    }>;
    color: 'primary' | 'secondary' | 'tertiary';
    disabled: boolean;
    isOpen: boolean;
    searchTerm: string;
    static styles: import("lit").CSSResult;
    private _toggleDropdown;
    private _selectOption;
    private _handleSearch;
    render(): import("lit").TemplateResult<1>;
}
