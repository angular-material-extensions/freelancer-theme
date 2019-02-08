import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material.module';

import { CoreModule } from '../../core';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { ConfigToken, DEFAULT_CONFIG } from '../../../config';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        BrowserAnimationsModule,
        FlexLayoutModule,
        MaterialModule,
        CoreModule
      ],
      declarations: [HeaderComponent, ShellComponent],
      providers: [
        {
          provide: ConfigToken,
          useValue: DEFAULT_CONFIG
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
