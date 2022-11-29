import { Theme, ThemePalette } from './Theme';

const enum BootbarnThemeName {
  Cool = 'Cool',
  Mono = 'Mono',
  Warm = 'Warm',
}

export const bootbarnThemes: { [name in BootbarnThemeName]: Theme } = {
  [BootbarnThemeName.Cool]: {
    name: 'bb-cool',
    displayName: 'Bootbarn cool',
    info: {
      palette: ThemePalette.Light,
    },
  },
  [BootbarnThemeName.Mono]: {
    name: 'bb-mono',
    displayName: 'Bootbarn mono',
    info: {
      palette: ThemePalette.Light,
    },
  },
  [BootbarnThemeName.Warm]: {
    name: 'bb-warm',
    displayName: 'Bootbarn warm',
    info: {
      palette: ThemePalette.Light,
    },
  },
};

export const bootbarnThemesList = Object.keys(bootbarnThemes).map((k) => bootbarnThemes[k]);
