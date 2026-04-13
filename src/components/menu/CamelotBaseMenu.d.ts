import { TemplateResult } from 'lit';
import { CamelotBaseElement } from '../base/CamelotBaseElement';
import { MenuOption } from './MenuOption';
/**
 * <CamelotBaseMenu>
 * 選單基底組件，處理資料渲染邏輯與狀態管理。
 */
export declare class CamelotBaseMenu extends CamelotBaseElement {
    options: MenuOption[];
    value: string;
    collapsed: boolean;
    mode: 'vertical' | 'horizontal';
    indent: number;
    protected _expandedKeys: Set<string>;
    protected _activePathKeys: Set<string>;
    protected updated(changedProperties: Map<string | number | symbol, unknown>): void;
    private _updateActivePath;
    private _findActivePath;
    protected _toggleExpand(key: string, e: Event): void;
    protected _handleSelect(key: string, e: Event): void;
    protected renderMenu(options: MenuOption[], level?: number): TemplateResult;
    protected renderItem(option: MenuOption, level: number): TemplateResult;
    protected renderIcon(iconName: string): TemplateResult;
    protected renderArrow(isExpanded: boolean, isRight?: boolean): TemplateResult;
    render(): TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
