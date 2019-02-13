import { Component, Inject, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { I18nService } from '../../../core';
import { Config, ConfigToken } from '../../../../config';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() sidenav: MatSidenav;

  constructor(
    @Inject(ConfigToken) public config: Config,
    @Inject(DOCUMENT) private document: any,
    private i18nService: I18nService
  ) {}

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  scrollToElementByID(id: string): void {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
