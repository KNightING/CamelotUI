import { CamelotBaseElement } from '../base/CamelotBaseElement';
import './CamelotMaterialTabs';
import './CamelotCupertinoTabs';
import './CamelotSoftTabs';
import './CamelotScifiTabs';
/**
 * <CamelotTabs>
 * 通用分頁標籤容器，由主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
export declare class CamelotTabs extends CamelotBaseElement {
    /**
     * 分頁項目清單：Array<{ label: string, value: string }>
     */
    items: Array<{
        label: string;
        value: string;
    }>;
    /**
     * 當前的選取值
     */
    value: string;
    /**
     * 標籤色彩：'primary', 'secondary', 'tertiary'
     */
    color: 'primary' | 'secondary' | 'tertiary';
    private _handleChanged;
    render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-tabs': CamelotTabs;
    }
}
