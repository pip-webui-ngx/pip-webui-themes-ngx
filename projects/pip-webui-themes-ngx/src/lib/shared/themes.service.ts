import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional, Renderer2, RendererFactory2 } from '@angular/core';
import defaultsDeep from 'lodash-es/defaultsDeep';
import { BehaviorSubject, Observable } from 'rxjs';
import { Theme } from './Theme';
import { defaultPipThemesConfig, PIP_THEMES_CONFIG, PipThemesConfig } from './ThemeConfig';

@Injectable({
  providedIn: 'root',
})
export class PipThemesService {
  private head: HTMLElement;
  private renderer: Renderer2;
  private themeLinks: HTMLElement[] = [];

  private currentThemeSub$ = new BehaviorSubject<Theme>(null);
  private configSub$ = new BehaviorSubject<PipThemesConfig>(null);
  private themesSub$ = new BehaviorSubject<Map<string, Theme>>(new Map<string, Theme>());

  config$: Observable<PipThemesConfig> = this.configSub$.asObservable();
  currentTheme$: Observable<Theme> = this.currentThemeSub$.asObservable();
  themes$: Observable<Map<string, Theme>> = this.themesSub$.asObservable();

  public constructor(
    @Optional() @Inject(PIP_THEMES_CONFIG) configs: PipThemesConfig[],
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) document: Document,
  ) {
    this.config = [...(configs ?? []), defaultPipThemesConfig].reduce((acc, cfg) => {
      const themes = Array.from(
        (cfg?.themes ?? [])
          .reduce((acc, theme) => {
            if (!acc.has(theme.name)) {
              acc.set(theme.name, theme);
            }
            return acc;
          }, new Map<string, Theme>((acc?.themes ?? []).map((theme) => [theme.name, theme])))
          .values(),
      );
      return defaultsDeep({}, acc, cfg, { themes });
    }, {} as PipThemesConfig);
    this.head = document.head;
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  get config(): PipThemesConfig {
    return this.configSub$.value;
  }

  set config(config: PipThemesConfig) {
    this.configSub$.next(config);
    const themes = new Map<string, Theme>();
    this.config?.themes.forEach((theme) => themes.set(theme.name, theme));
    this.themesSub$.next(themes);
  }

  get defaultThemeName(): string {
    return this.config?.defaultThemeName ?? defaultPipThemesConfig.defaultThemeName;
  }

  set defaultThemeName(defaultThemeName: string) {
    this.configSub$.next(Object.assign({}, this.config, { defaultThemeName }));
  }

  get path(): string {
    return this.config?.path ?? defaultPipThemesConfig.path;
  }

  set path(path: string) {
    this.configSub$.next(Object.assign({}, this.config, { path }));
  }

  get currentTheme(): Theme {
    return this.currentThemeSub$.value;
  }

  get themes(): Map<string, Theme> {
    return this.themesSub$.value;
  }

  get themesArray(): Theme[] {
    return Array.from(this.themes.values());
  }

  private async loadCss(filename: string) {
    return new Promise((resolve) => {
      const linkEl: HTMLElement = this.renderer.createElement('link');
      this.renderer.setAttribute(linkEl, 'rel', 'stylesheet');
      this.renderer.setAttribute(linkEl, 'type', 'text/css');
      this.renderer.setAttribute(linkEl, 'href', filename);
      this.renderer.setProperty(linkEl, 'onload', resolve);
      this.renderer.appendChild(this.head, linkEl);
      this.themeLinks = [...this.themeLinks, linkEl];
    });
  }

  /**
   * Select another registered theme
   * @param themeName Name of theme to select
   */
  async selectTheme(themeName: string): Promise<void> {
    const themes = this.themes;
    if (themes && themes.has(themeName) && themeName !== this.currentTheme?.name) {
      const theme = themes.get(themeName);
      this.currentThemeSub$.next(theme);
      let newThemePath = theme.path ?? this.config?.path ?? 'assets/themes/';
      if (!newThemePath.endsWith('/')) {
        newThemePath += '/';
      }
      const cssFilename = newThemePath + theme.name + '.css';
      await this.loadCss(cssFilename);
      if (this.themeLinks.length == 2) {
        this.renderer.removeChild(this.head, this.themeLinks.shift());
      }
    } else {
      return Promise.resolve();
    }
  }
}
