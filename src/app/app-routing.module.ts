import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'recipes',
    loadChildren: () => import('./website/website.module').then((m) => m.WebsiteModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
