import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootRouterModule } from './app.routes';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeModule } from './containers/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RootRouterModule,
    HomeModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
