import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './components/home/home.module';
import { ShellModule } from './components/shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectDialogComponent } from '@app/components/project-dialog/project-dialog.component';
import { NgxWebstorageModule } from 'ngx-webstorage';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'freelancer-theme' }),
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    NgxWebstorageModule.forRoot(),
    Angulartics2Module.forRoot(),
    TranslateModule.forRoot(),
    SharedModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    ShellModule,
    HomeModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route.
  ],
  declarations: [AppComponent, ProjectDialogComponent],
  entryComponents: [ProjectDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
    angulartics2GoogleAnalytics.startTracking();
  }
}
