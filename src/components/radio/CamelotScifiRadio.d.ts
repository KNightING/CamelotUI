import { LitElement } from 'lit';
import '../scifi/CamelotScifiReticle';
/**
 * <CamelotScifiRadio>
 * 日系科幻風格 (Sci-fi HUD) 的單選框。
 * 視覺重點：菱形框架、中心發光點、數位邊界。
 */
export declare class CamelotScifiRadio extends LitElement {
    checked: boolean;
    disabled: boolean;
    label: string;
    color: 'primary' | 'secondary' | 'tertiary';
    private _isHovered;
    static styles: import("lit").CSSResult;
    private _toggle;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-scifi-radio-impl': CamelotScifiRadio;
    }
}
