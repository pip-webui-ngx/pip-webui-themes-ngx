import { Theme, ThemePalette } from './Theme';

const enum PipWebuiThemeName {
  Amber = 'Amber',
  Black = 'Black',
  Blue = 'Blue',
  Candy = 'Candy',
  Dark = 'Dark',
  Green = 'Green',
  Grey = 'Grey',
  Navy = 'Navy',
  Orange = 'Orange',
  Pink = 'Pink',
  UnicornDark = 'UnicornDark',
}

export const pipWebUI2Themes: { [name in PipWebuiThemeName]: Theme } = {
  [PipWebuiThemeName.Amber]: {
    name: 'pip-amber',
    displayName: 'Pip amber',
    info: {
      palette: ThemePalette.Light,
    },
  },
  [PipWebuiThemeName.Black]: {
    name: 'pip-black',
    displayName: 'Pip black',
    info: {
      palette: ThemePalette.Dark,
    },
  },
  [PipWebuiThemeName.Blue]: {
    name: 'pip-blue',
    displayName: 'Pip blue',
    info: {
      palette: ThemePalette.Light,
    },
  },
  [PipWebuiThemeName.Candy]: {
    name: 'pip-candy',
    displayName: 'Pip candy',
    info: {
      palette: ThemePalette.Light,
    },
  },
  [PipWebuiThemeName.Dark]: {
    name: 'pip-dark',
    displayName: 'Pip dark',
    info: {
      palette: ThemePalette.Dark,
    },
  },
  [PipWebuiThemeName.Green]: {
    name: 'pip-green',
    displayName: 'Pip green',
    info: {
      palette: ThemePalette.Light,
    },
  },
  [PipWebuiThemeName.Grey]: {
    name: 'pip-grey',
    displayName: 'Pip grey',
    info: {
      palette: ThemePalette.Light,
    },
  },
  [PipWebuiThemeName.Navy]: {
    name: 'pip-navy',
    displayName: 'Pip navy',
    info: {
      palette: ThemePalette.Light,
    },
  },
  [PipWebuiThemeName.Orange]: {
    name: 'pip-orange',
    displayName: 'Pip orange',
    info: {
      palette: ThemePalette.Light,
    },
  },
  [PipWebuiThemeName.Pink]: {
    name: 'pip-pink',
    displayName: 'Pip pink',
    info: {
      palette: ThemePalette.Light,
    },
  },
  [PipWebuiThemeName.UnicornDark]: {
    name: 'pip-unicorn-dark',
    displayName: 'Pip unicorn dark',
    info: {
      palette: ThemePalette.Dark,
    },
  },
};

export const pipWebUI2ThemesList = Object.keys(pipWebUI2Themes).map((k) => pipWebUI2Themes[k]);
