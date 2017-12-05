import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { TestRouterModule } from './test.routes';

@NgModule({
  imports: [
    CommonModule,
    TestRouterModule
  ],
  declarations: [TestComponent]
})
export class TestModule { }
