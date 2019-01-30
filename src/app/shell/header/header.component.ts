import { Title } from '@angular/platform-browser';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { I18nService } from '@app/core';
import { Config, ConfigToken } from '../../../config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sidenav: MatSidenav;

  constructor(
    @Inject(ConfigToken)
    public config: Config,
    private titleService: Title,
    private i18nService: I18nService
  ) {}

  ngOnInit() {
    console.log('on ng init: ', this.config);
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get title(): string {
    return this.titleService.getTitle();
  }
}
