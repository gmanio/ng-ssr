import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserPrebootModule } from 'preboot/src/browser/browser-preboot.module';
import { RootRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './containers/etc/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(RootRoutes),
    BrowserModule.withServerTransition({ appId: 'ssr-angular' }),
    BrowserPrebootModule.replayEvents()
  ],
  exports: [
    RouterModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
