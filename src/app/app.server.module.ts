import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ServerPrebootModule } from 'preboot/src/server/server-preboot.module';

@NgModule({
  imports: [
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
