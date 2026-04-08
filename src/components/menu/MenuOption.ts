/**
 * MenuOption 選單選項定義
 */
export interface MenuOption {
  /** 顯示名稱 */
  label: string;
  /** 唯一識別值 */
  key: string;
  /** 圖示名稱或 HTML 字串 (視實作而定) */
  icon?: string;
  /** 子選單 */
  children?: MenuOption[];
  /** 是否禁用 */
  disabled?: boolean;
}
