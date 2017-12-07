import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RootRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './containers/etc/page-not-found.component';
import { PrebootModule } from 'preboot';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ssr-angular' }),
    PrebootModule.withConfig({ appRoot: 'app-root' }),
    RouterModule.forRoot(RootRoutes),
    HttpClientModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
