export interface CamelotThemeColors {
    'primary'?: string;
    'on-primary'?: string;
    'primary-container'?: string;
    'on-primary-container'?: string;
    'secondary'?: string;
    'on-secondary'?: string;
    'secondary-container'?: string;
    'on-secondary-container'?: string;
    'tertiary'?: string;
    'on-tertiary'?: string;
    'tertiary-container'?: string;
    'on-tertiary-container'?: string;
    'error'?: string;
    'on-error'?: string;
    'error-container'?: string;
    'on-error-container'?: string;
    'background'?: string;
    'on-background'?: string;
    'surface'?: string;
    'on-surface'?: string;
    'surface-variant'?: string;
    'on-surface-variant'?: string;
    'outline'?: string;
    'outline-variant'?: string;
    'surface-container-low'?: string;
    'surface-container'?: string;
    'surface-container-high'?: string;
    'surface-container-highest'?: string;
    'info'?: string;
    'on-info'?: string;
    'info-container'?: string;
    'on-info-container'?: string;
    'warning'?: string;
    'on-warning'?: string;
    'warning-container'?: string;
    'on-warning-container'?: string;
    'success'?: string;
    'on-success'?: string;
    'success-container'?: string;
    'on-success-container'?: string;
}
export interface CamelotThemeFont {
    'family'?: string;
    'weight-regular'?: string | number;
    'weight-medium'?: string | number;
    'weight-bold'?: string | number;
    'size-label'?: string;
    'size-body'?: string;
    'size-title'?: string;
    'size-headline'?: string;
}
export interface CamelotThemeSpacing {
    '1'?: string;
    '2'?: string;
    '3'?: string;
    '4'?: string;
    '6'?: string;
    '8'?: string;
}
export interface CamelotThemeRadius {
    'xs'?: string;
    's'?: string;
    'm'?: string;
    'l'?: string;
    'full'?: string;
}
export interface CamelotThemeSoft {
    'blur'?: string;
    'distance'?: string;
    'intensity'?: string | number;
    'color-light'?: string;
    'color-dark'?: string;
}
export interface CamelotThemeDrawer {
    'width'?: string;
    'height'?: string;
    'shadow'?: string;
}
export interface CamelotThemeScifi {
    'glow-color'?: string;
    'glow-intensity'?: string | number;
    'corner-size'?: string;
    'scanline-opacity'?: string | number;
    'highlight'?: string;
    'bracket-color'?: string;
}
export interface CamelotThemeConfig {
    color?: CamelotThemeColors;
    font?: CamelotThemeFont;
    spacing?: CamelotThemeSpacing;
    radius?: CamelotThemeRadius;
    soft?: CamelotThemeSoft;
    drawer?: CamelotThemeDrawer;
    scifi?: CamelotThemeScifi;
    light?: Omit<CamelotThemeConfig, 'light' | 'dark'>;
    dark?: Omit<CamelotThemeConfig, 'light' | 'dark'>;
}
export declare const THEME_DEFAULT: CamelotThemeConfig;
export declare const THEME_SAPPHIRE: CamelotThemeConfig;
export declare const THEME_EMERALD: CamelotThemeConfig;
export declare const THEME_CYBER: CamelotThemeConfig;
