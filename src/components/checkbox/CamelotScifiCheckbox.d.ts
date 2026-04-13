import { LitElement } from 'lit';
import '../scifi/CamelotScifiReticle';
/**
 * <CamelotScifiCheckbox>
 * 日系科幻風格 (Sci-fi HUD) 的多選框。
 * 視覺重點：方括號框架 [ ]、內部掃描線、數位脈衝動畫。
 */
export declare class CamelotScifiCheckbox extends LitElement {
    label: string;
    checked: boolean;
    disabled: boolean;
    color: 'primary' | 'secondary' | 'tertiary';
    private _isHovered;
    static styles: import("lit").CSSResult;
    private _toggle;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-scifi-checkbox-impl': CamelotScifiCheckbox;
    }
}
