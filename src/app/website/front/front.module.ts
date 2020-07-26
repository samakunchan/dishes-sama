import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { CookersComponent } from './pages/cookers/cookers.component';
import { AboutComponent } from './pages/about/about.component';
import { RecipeShowComponent } from './pages/recipes/recipe-show/recipe-show.component';
import { RecipeListComponent } from './pages/recipes/recipe-list/recipe-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'recipe/:slug', component: RecipeShowComponent },
  { path: 'cookers', component: CookersComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [RecipesComponent, RecipeShowComponent, RecipeListComponent, CookersComponent, AboutComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule, MatButtonModule, MatCheckboxModule],
  exports: [RecipeListComponent],
})
export class FrontModule {}
