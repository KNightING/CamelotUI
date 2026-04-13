import { CamelotBaseDrawer } from './CamelotBaseDrawer';
/**
 * <CamelotMaterialDrawer>
 * Material 3 風格的抽屜元件。
 */
export declare class CamelotMaterialDrawer extends CamelotBaseDrawer {
    headline?: string;
    static styles: import("lit").CSSResult[];
    protected renderContent(): import("lit").TemplateResult<1>;
    private _hasSlot;
}
