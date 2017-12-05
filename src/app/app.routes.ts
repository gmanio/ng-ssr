import { RouterModule } from '@angular/router';

export const RootRouterModule = RouterModule.forRoot(
  [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './containers/home/home.module#HomeModule' }
  ]
);
