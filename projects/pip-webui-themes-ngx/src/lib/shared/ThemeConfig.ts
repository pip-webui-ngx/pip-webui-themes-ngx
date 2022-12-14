import { InjectionToken } from '@angular/core';
import { pipWebUI2Themes } from './pip-themes';
import { Theme } from './Theme';

/**
 * Configuration for theme
 */
export class PipThemesConfig {
  /**
   * Name of default theme which will be used if there's no theme information stored in localStorage
   */
  defaultThemeName: string;
  /**
   * List of available themes
   */
  themes: Theme[];
  /**
   * Url from where themes will be loaded
   */
  path: string;
}

export const defaultPipThemesConfig: PipThemesConfig = {
  defaultThemeName: 'pip-blue',
  themes: [pipWebUI2Themes.Blue],
  path: '',
};

export const PIP_THEMES_CONFIG = new InjectionToken<Partial<PipThemesConfig>>('pip-webui-themes-ngx config');
