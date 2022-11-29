import { Theme, ThemePalette } from './Theme';

const enum MstThemeName {
  Black = 'Black',
  BlackDark = 'BlackDark',
  Elegant = 'Elegant',
  Mono = 'Mono',
  Orange = 'Orange',
  OrangeDark = 'OrangeDark',
}

export const mstThemes: { [name in MstThemeName]: Theme } = {
  [MstThemeName.Black]: {
    name: 'mst-black',
    displayName: 'MST black',
    info: {
      palette: ThemePalette.Light,
    },
  },
  [MstThemeName.BlackDark]: {
    name: 'mst-black-dark',
    displayName: 'MST black dark',
    info: {
      palette: ThemePalette.Dark,
    },
  },
  [MstThemeName.Elegant]: {
    name: 'mst-elegant',
    displayName: 'MST elegant',
    info: {
      palette: ThemePalette.Dark,
    },
  },
  [MstThemeName.Mono]: {
    name: 'mst-mono',
    displayName: 'MST mono',
    info: {
      palette: ThemePalette.Light,
    },
  },
  [MstThemeName.Orange]: {
    name: 'mst-orange',
    displayName: 'MST orange',
    info: {
      palette: ThemePalette.Light,
    },
  },
  [MstThemeName.OrangeDark]: {
    name: 'mst-orange-dark',
    displayName: 'MST orange dark',
    info: {
      palette: ThemePalette.Dark,
    },
  },
};

export const mstThemesList = Object.keys(mstThemes).map((k) => mstThemes[k]);
