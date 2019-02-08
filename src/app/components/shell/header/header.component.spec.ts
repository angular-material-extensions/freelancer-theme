import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

import { MaterialModule } from '../../../material.module';
import { I18nService } from '../../../core';
import { HeaderComponent } from './header.component';
import { ConfigToken, DEFAULT_CONFIG } from '../../../../config';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule, TranslateModule.forRoot()],
      declarations: [HeaderComponent],
      providers: [
        I18nService,
        {
          provide: ConfigToken,
          useValue: DEFAULT_CONFIG
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
