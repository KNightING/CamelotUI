import { LitElement } from 'lit';
import '../scifi/CamelotScifiReticle';
/**
 * <CamelotScifiSwitch>
 * 日系科幻風格 (Sci-fi HUD) 的開關元件。
 * 視覺重點：銳利稜角、掃描發光、菱形滑塊。
 */
export declare class CamelotScifiSwitch extends LitElement {
    checked: boolean;
    disabled: boolean;
    color: 'primary' | 'secondary' | 'tertiary';
    static styles: import("lit").CSSResult;
    private _toggle;
    private _playClickEffect;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-scifi-switch-impl': CamelotScifiSwitch;
    }
}
