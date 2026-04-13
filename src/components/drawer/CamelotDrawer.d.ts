import { CamelotBaseElement } from '../base/CamelotBaseElement';
import './CamelotMaterialDrawer';
import './CamelotCupertinoDrawer';
import './CamelotSoftDrawer';
import './CamelotScifiDrawer';
/**
 * <CamelotDrawer>
 * 抽屜元件的門面 (Facade)，根據當前主題風格自動渲染對應的實作。
 */
export declare class CamelotDrawer extends CamelotBaseElement {
    open: boolean;
    anchor: 'left' | 'right' | 'top' | 'bottom';
    label?: string;
    headline?: string;
    /**
     * 開啟抽屜
     */
    show(): void;
    /**
     * 關閉抽屜
     */
    hide(): void;
    private _handleCancel;
    private _handleOpen;
    private _handleClose;
    render(): import("lit").TemplateResult<1>;
}
