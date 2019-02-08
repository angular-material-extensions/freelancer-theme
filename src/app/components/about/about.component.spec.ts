import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../../material.module';
import { AboutComponent } from './about.component';
import { ConfigToken, DEFAULT_CONFIG } from '../../../config';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, TranslateModule.forRoot(), FlexLayoutModule, MaterialModule],
      declarations: [AboutComponent],
      providers: [
        TranslateService,
        {
          provide: ConfigToken,
          useValue: DEFAULT_CONFIG
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
