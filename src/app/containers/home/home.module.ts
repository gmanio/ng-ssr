import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouterModule } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    HomeRouterModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
