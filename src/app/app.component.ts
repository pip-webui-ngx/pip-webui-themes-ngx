import { Component, Inject, Optional } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { AbstractControl, UntypedFormControl, Validators } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import { PipThemesService, Theme } from 'pip-webui-themes-ngx';
import { combineLatest, distinctUntilChanged, map, Observable } from 'rxjs';
import { PIP_THEMES_CONFIG, PipThemesConfig, ThemePalette } from '../../projects/pip-webui-themes-ngx/src/lib/shared';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ctx$: Observable<{
    currentTheme: Theme;
    themes: Theme[];
    picture: string;
  }>;
  palletes = ['accent', 'primary', 'warn'];
  properties = ['color', 'background-color'];
  email = new UntypedFormControl('', [Validators.required, Validators.email]);
  newText = 'Random text from outside';

  public constructor(
    @Optional() @Inject(PIP_THEMES_CONFIG) configs: PipThemesConfig[],
    private pipThemes: PipThemesService,
    public media: MediaObserver,
    public translate: TranslocoService,
  ) {
    this.pipThemes.selectTheme(this.pipThemes.config.defaultThemeName);
    this.ctx$ = combineLatest({
      currentTheme: this.pipThemes.currentTheme$,
      themes: this.pipThemes.themes$.pipe(map((themes) => Array.from(themes.values()))),
      picture: this.pipThemes.currentTheme$.pipe(
        map((theme) => theme?.info?.palette),
        distinctUntilChanged(),
        map((palette) => (palette === ThemePalette.Light ? '/assets/1.jpg' : '/assets/2.jpg')),
      ),
    });
  }

  changeTheme(theme: Theme) {
    this.pipThemes.selectTheme(theme.name);
  }

  getFirstError(ctrl: AbstractControl): string | null {
    if (ctrl.errors && Object.keys(ctrl.errors).length) {
      return Object.keys(ctrl.errors)[0];
    }
    return null;
  }
}
