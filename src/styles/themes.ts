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

// --- Predefined Themes ---

export const THEME_DEFAULT: CamelotThemeConfig = {
  light: {
    color: {
      'primary': '#6750A4', 'on-primary': '#FFFFFF', 'primary-container': '#EADDFF', 'on-primary-container': '#21005D',
      'secondary': '#625B71', 'on-secondary': '#FFFFFF', 'secondary-container': '#E8DEF8', 'on-secondary-container': '#1D192B',
      'tertiary': '#7D5260', 'on-tertiary': '#FFFFFF', 'tertiary-container': '#FFD8E4', 'on-tertiary-container': '#31111D',
      'error': '#B3261E', 'on-error': '#FFFFFF', 'error-container': '#F9DEDC', 'on-error-container': '#410E0B',
      'background': '#FEF7FF', 'on-background': '#1D1B20', 'surface': '#FEF7FF', 'on-surface': '#1D1B20',
      'surface-variant': '#E7E0EC', 'on-surface-variant': '#49454F', 'outline': '#79747E', 'outline-variant': '#CAC4D0',
      'surface-container-low': '#F7F2FA', 'surface-container': '#F3EDF7', 'surface-container-high': '#ECE6F0', 'surface-container-highest': '#E6E0E9'
    },
    font: {
      'family': "'Noto Sans TC', 'Roboto', sans-serif"
    },
    soft: {
      'color-light': 'rgba(255, 255, 255, 0.8)',
      'color-dark': 'rgba(0, 0, 0, 0.1)'
    },
    drawer: {
      'width': '360px',
      'height': '240px',
      'shadow': '0 8px 32px rgba(0,0,0,0.12)'
    }
  },
  dark: {
    color: {
      'primary': '#D0BCFF', 'on-primary': '#381E72', 'primary-container': '#4F378B', 'on-primary-container': '#EADDFF',
      'secondary': '#CCC2DC', 'on-secondary': '#332D41', 'secondary-container': '#4A4458', 'on-secondary-container': '#E8DEF8',
      'tertiary': '#EFB8C8', 'on-tertiary': '#492532', 'tertiary-container': '#633B48', 'on-tertiary-container': '#FFD8E4',
      'error': '#F2B8B5', 'on-error': '#601410', 'error-container': '#8C1D18', 'on-error-container': '#F9DEDC',
      'background': '#141218', 'on-background': '#E6E1E5', 'surface': '#141218', 'on-surface': '#E6E1E5',
      'surface-variant': '#49454F', 'on-surface-variant': '#CAC4D0', 'outline': '#938F99', 'outline-variant': '#44474E',
      'surface-container-low': '#1D1B20', 'surface-container': '#211F26', 'surface-container-high': '#2B2930', 'surface-container-highest': '#36343B'
    },
    font: {
      'family': "'Noto Sans TC', 'Roboto', sans-serif"
    },
    soft: {
      'color-light': 'rgba(255, 255, 255, 0.05)',
      'color-dark': 'rgba(0, 0, 0, 0.5)'
    },
    drawer: {
      'width': '360px',
      'height': '240px',
      'shadow': '0 8px 32px rgba(0,0,0,0.3)'
    }
  }
};

export const THEME_SAPPHIRE: CamelotThemeConfig = {
  light: {
    color: {
      'primary': '#0061A4', 'on-primary': '#FFFFFF', 'primary-container': '#D1E4FF', 'on-primary-container': '#001D36',
      'secondary': '#535F70', 'on-secondary': '#FFFFFF', 'secondary-container': '#D7E3F7', 'on-secondary-container': '#101C2B',
      'tertiary': '#6B5778', 'on-tertiary': '#FFFFFF', 'tertiary-container': '#F2DAFF', 'on-tertiary-container': '#251431',
      'error': '#BA1A1A', 'on-error': '#FFFFFF', 'error-container': '#FFDAD6', 'on-error-container': '#410002',
      'background': '#F8F9FF', 'on-background': '#191C20', 'surface': '#F8F9FF', 'on-surface': '#191C20',
      'surface-variant': '#DFE2EB', 'on-surface-variant': '#43474E', 'outline': '#73777F', 'outline-variant': '#C3C7CF',
      'surface-container-low': '#F0F4F9', 'surface-container': '#EAEFF6', 'surface-container-high': '#E4EAF2', 'surface-container-highest': '#DEE4ED'
    },
    soft: {
      'color-light': 'rgba(255, 255, 255, 0.8)',
      'color-dark': 'rgba(0, 50, 88, 0.15)'
    }
  },
  dark: {
    color: {
      'primary': '#9ECAFF', 'on-primary': '#003258', 'primary-container': '#00497D', 'on-primary-container': '#D1E4FF',
      'secondary': '#BBC7DB', 'on-secondary': '#253140', 'secondary-container': '#3B4858', 'on-secondary-container': '#D7E3F7',
      'tertiary': '#D7BEE4', 'on-tertiary': '#3B2948', 'tertiary-container': '#523F5F', 'on-tertiary-container': '#F2DAFF',
      'error': '#FFB4AB', 'on-error': '#690005', 'error-container': '#93000A', 'on-error-container': '#FFDAD6',
      'background': '#111318', 'on-background': '#E2E2E9', 'surface': '#111318', 'on-surface': '#E2E2E9',
      'surface-variant': '#43474E', 'on-surface-variant': '#C3C7CF', 'outline': '#8D9199', 'outline-variant': '#43474E',
      'surface-container-low': '#191C20', 'surface-container': '#1D2025', 'surface-container-high': '#272A30', 'surface-container-highest': '#32353B'
    },
    soft: {
      'color-light': 'rgba(255, 255, 255, 0.05)',
      'color-dark': 'rgba(0, 0, 0, 0.6)'
    }
  }
};

export const THEME_EMERALD: CamelotThemeConfig = {
  light: {
    color: {
      'primary': '#006D3A', 'on-primary': '#FFFFFF', 'primary-container': '#98F7B5', 'on-primary-container': '#00210E',
      'secondary': '#506353', 'on-secondary': '#FFFFFF', 'secondary-container': '#D2E8D4', 'on-secondary-container': '#0E1F13',
      'tertiary': '#3B6470', 'on-tertiary': '#FFFFFF', 'tertiary-container': '#BEEAF7', 'on-tertiary-container': '#001F26',
      'error': '#BA1A1A', 'on-error': '#FFFFFF', 'error-container': '#FFDAD6', 'on-error-container': '#410002',
      'background': '#F7FBF2', 'on-background': '#191C19', 'surface': '#F7FBF2', 'on-surface': '#191C19',
      'surface-variant': '#DDE5DA', 'on-surface-variant': '#424941', 'outline': '#727970', 'outline-variant': '#C1C9BE',
      'surface-container-low': '#F1F6EC', 'surface-container': '#ECF1E7', 'surface-container-high': '#E6EADE', 'surface-container-highest': '#E1E5D8'
    },
    soft: {
      'color-light': 'rgba(255, 255, 255, 0.8)',
      'color-dark': 'rgba(0, 50, 20, 0.1)'
    }
  },
  dark: {
    color: {
      'primary': '#7DDA9B', 'on-primary': '#00391C', 'primary-container': '#00522B', 'on-primary-container': '#98F7B5',
      'secondary': '#B7CCB9', 'on-secondary': '#233427', 'secondary-container': '#394B3C', 'on-secondary-container': '#D2E8D4',
      'tertiary': '#A2CEDC', 'on-tertiary': '#053540', 'tertiary-container': '#214D58', 'on-tertiary-container': '#BEEAF7',
      'error': '#FFB4AB', 'on-error': '#690005', 'error-container': '#93000A', 'on-error-container': '#FFDAD6',
      'background': '#111411', 'on-background': '#E1E3DE', 'surface': '#111411', 'on-surface': '#E1E3DE',
      'surface-variant': '#424941', 'on-surface-variant': '#C1C9BE', 'outline': '#8B9389', 'outline-variant': '#424941',
      'surface-container-low': '#191C19', 'surface-container': '#1D211D', 'surface-container-high': '#272B27', 'surface-container-highest': '#323632'
    },
    soft: {
      'color-light': 'rgba(255, 255, 255, 0.05)',
      'color-dark': 'rgba(0, 0, 0, 0.6)'
    },
    scifi: {
      'glow-color': 'rgba(125, 218, 155, 0.4)',
      'glow-intensity': 0.6,
      'corner-size': '8px',
      'scanline-opacity': 0.05
    }
  }
};

export const THEME_CYBER: CamelotThemeConfig = {
  dark: {
    color: {
      'primary': '#00f3ff', 'on-primary': '#000000', 'primary-container': '#00373a', 'on-primary-container': '#00f3ff',
      'secondary': '#ff0055', 'on-secondary': '#ffffff', 'secondary-container': '#4a001a', 'on-secondary-container': '#ff0055',
      'tertiary': '#bcff00', 'on-tertiary': '#000000', 'tertiary-container': '#2b3a00', 'on-tertiary-container': '#bcff00',
      'error': '#ff3d3d', 'on-error': '#ffffff', 'error-container': '#410002', 'on-error-container': '#ff3d3d',
      'background': '#05080a', 'on-background': '#c0d0d0', 'surface': '#0d121b', 'on-surface': '#c0d0d0',
      'surface-variant': '#1a2b3c', 'on-surface-variant': '#a0b0b0', 'outline': '#304a5f', 'outline-variant': '#1a2b3c',
      'surface-container-low': '#081018', 'surface-container': '#0d121b', 'surface-container-high': '#1a212d', 'surface-container-highest': '#252e3f'
    },
    font: {
      'family': "'Share Tech Mono', 'Roboto Mono', monospace"
    },
    scifi: {
      'glow-color': '#00f3ff',
      'glow-intensity': 1,
      'corner-size': '12px',
      'scanline-opacity': 0.15,
      'highlight': '#ffffff',
      'bracket-color': '#00f3ff'
    }
  }
};
