import { RouterModule } from '@angular/router';
import { TestComponent } from './test.component';

export const TestRouterModule = RouterModule.forChild([
  { path: '', component: TestComponent }
]);

