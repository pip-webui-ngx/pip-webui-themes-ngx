import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { PIP_THEMES_CONFIG, PipThemesConfig } from './shared/ThemeConfig';
import { PipThemesService } from './shared/themes.service';

@NgModule()
export class PipThemesModule {
  static forRoot(config?: Partial<PipThemesConfig>): ModuleWithProviders<PipThemesModule> {
    const providers: Provider[] = [PipThemesService];
    if (config) {
      providers.push({
        provide: PIP_THEMES_CONFIG,
        useValue: config,
        multi: true,
      });
    }
    return {
      ngModule: PipThemesModule,
      providers,
    };
  }
}
