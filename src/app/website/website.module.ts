import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './front/pages/recipes/recipes.component';
import { CookersComponent } from './front/pages/cookers/cookers.component';
import { AboutComponent } from './front/pages/about/about.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../shared/layout/header/header.component';
import { WebsiteComponent } from './website.component';
import { MatCardModule } from '@angular/material/card';
import { RecipeComponent } from './front/pages/recipes/recipe/recipe.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./front/front.module').then((m) => m.FrontModule),
      },
    ],
  },
];

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeComponent,
    HeaderComponent,
    CookersComponent,
    AboutComponent,
    WebsiteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
  ],
})
export class WebsiteModule {}
