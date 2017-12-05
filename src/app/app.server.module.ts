import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ServerPrebootModule } from 'preboot/src/server/server-preboot.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'ssr-angular' }),
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerPrebootModule.recordEvents({
      appRoot: 'app-root'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {
}
