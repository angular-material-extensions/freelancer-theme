import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { environment } from '@env/environment';
import { I18nService, Logger } from '@app/core';
import { MatIconRegistry } from '@angular/material';
import { isPlatformServer } from '@angular/common';

const log = new Logger('App');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService,
    // do not remove the analytics injection, even if the call in ngOnInit() is removed
    // this injection initializes page tracking through the router
    private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private i18nService: I18nService,
    private _iconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer
  ) {
    // domain and port for SSR in this example is static. Use i.e. environment
    // files to use appropriate dev/prod domain:port
    // const domain = (isPlatformServer(platformId))
    // ? 'http://localhost:4000' : 'https://angular-material-extensions.github.io/freelancer-theme';
    const domain = isPlatformServer(platformId) ? 'http://localhost:4000' : '';
    console.log('on construct app component');
    _iconRegistry
      .addSvgIcon('facebook', _sanitizer.bypassSecurityTrustResourceUrl(`${domain}/assets/icons/facebook.svg`))
      .addSvgIcon('twitter', _sanitizer.bypassSecurityTrustResourceUrl(`${domain}/assets/icons/twitter.svg`))
      .addSvgIcon('linkedin', _sanitizer.bypassSecurityTrustResourceUrl(`${domain}/assets/icons/linkedin.svg`))
      .addSvgIcon('github', _sanitizer.bypassSecurityTrustResourceUrl(`${domain}/assets/icons/github-circle.svg`));
  }

  ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');

    this.angulartics2GoogleAnalytics.eventTrack(environment.version, { category: 'App initialized' });

    // Setup translations
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

    const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));

    // Change page title on navigation or language change, based on route data
    merge(this.translateService.onLangChange, onNavigationEnd)
      .pipe(
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
      )
      .subscribe(event => {
        const title = event['title'];
        if (title) {
          this.titleService.setTitle(this.translateService.instant(title));
        }
      });
  }
}
