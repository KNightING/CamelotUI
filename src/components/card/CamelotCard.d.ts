import { CamelotBaseElement } from '../base/CamelotBaseElement';
import './CamelotMaterialCard';
import './CamelotCupertinoCard';
import './CamelotSoftCard';
import './CamelotScifiCard';
/**
 * <CamelotCard>
 * 通用卡片容器元件，根據主題切換風格。
 * 繼承自 CamelotBaseElement 以獲取自動風格偵測能力。
 */
export declare class CamelotCard extends CamelotBaseElement {
    /**
     * 卡片內部的間距 (Padding)
     */
    padding: string;
    render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'camelot-card': CamelotCard;
    }
}
