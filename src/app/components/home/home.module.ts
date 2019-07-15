import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Angulartics2Module } from 'angulartics2';

import { CoreModule } from '../../core';
import { SharedModule } from '../../shared';
import { MaterialModule } from '../../material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from '../about/about.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    Angulartics2Module,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, AboutComponent],
  providers: []
})
export class HomeModule {}
