import { CamelotBaseElement } from '../base/CamelotBaseElement';
import { MenuOption } from './MenuOption';
import './CamelotMaterialMenu';
import './CamelotSoftMenu';
import './CamelotScifiMenu';
/**
 * <camelot-menu>
 * 複合式選單組件，支援多種預設風格與數據驅動渲染。
 */
export declare class CamelotMenu extends CamelotBaseElement {
    options: MenuOption[];
    value: string;
    collapsed: boolean;
    mode: 'vertical' | 'horizontal';
    indent: number;
    styleType?: 'material' | 'cupertino' | 'soft' | 'scifi';
    connectedCallback(): void;
    protected updated(changedProperties: Map<string | number | symbol, unknown>): void;
    private _updateStyle;
    private _handleSelect;
    private _handleValueUpdate;
    render(): import("lit").TemplateResult<1>;
}
