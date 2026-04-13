import { CamelotBaseDrawer } from './CamelotBaseDrawer';
import '../button/text/CamelotTextButton';
/**
 * <CamelotCupertinoDrawer>
 * Cupertino (iOS) 風格的抽屜元件。
 */
export declare class CamelotCupertinoDrawer extends CamelotBaseDrawer {
    label?: string;
    static styles: import("lit").CSSResult[];
    protected renderContent(): import("lit").TemplateResult<1>;
}
