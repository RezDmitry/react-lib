export interface UtilsPalette {
  white: string,
  black: string,
}

export interface BaseTheme {
  utils: UtilsPalette
}

const baseTheme = {
  utils: {
    white: '#FFFFFF',
    black: '#000000',
  }
}

export interface Palette {
  primary: string,
  success: string,
  warning: string,
  danger: string,
  disabled: string,
}

export interface Theme extends BaseTheme {
  text: string,
  background: string,
  palette: Palette,
}

export const lightTheme: Theme = Object.create({...baseTheme,
  text: '#323232',
  background: '#FFFFFF',
  palette: {
    primary: '#0275d8',
    success: '#5cb85c',
    warning: '#f0ad4e',
    danger: '#d9534f',
    disabled: '#9B9B9B',
  },
});

export const darkTheme: Theme = Object.create({...baseTheme,
  text: '#FFFFFF',
  background: '#323232',
  palette: {
    primary: '#318ee3',
    success: '#6cd36c',
    warning: '#f19a2c',
    danger: '#f1433f',
    disabled: '#a8a4a4',
  },
});