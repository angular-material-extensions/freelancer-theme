import { Title } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { I18nService } from '@app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sidenav: MatSidenav;

  constructor(private titleService: Title, private i18nService: I18nService) {}

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get title(): string {
    return this.titleService.getTitle();
  }

  ngOnInit() {}

  setLanguage(language: string) {
    this.i18nService.language = language;
  }
}
