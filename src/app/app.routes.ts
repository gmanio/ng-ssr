import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './containers/etc/page-not-found.component';

export const RootRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './containers/home/home.module#HomeModule' },
  { path: 'test', loadChildren: './containers/test/test.module#TestModule' },
  { path: '**', component: PageNotFoundComponent }
];
