import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../shared/layout/header/header.component';
import { WebsiteComponent } from './website.component';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { RecipeEffects } from '../store/recipe/recipe.effects';
import { StoreModule } from '@ngrx/store';
import { recipeFeatureKey, recipeReducer } from '../store/recipe/recipe.reducer';

const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./front/front.module').then((m) => m.FrontModule),
      },
    ],
  },
];

@NgModule({
  declarations: [HeaderComponent, WebsiteComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    StoreModule.forFeature(recipeFeatureKey, recipeReducer),
    EffectsModule.forFeature([RecipeEffects]),
  ],
})
export class WebsiteModule {}
