import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RecipeComponent } from './pages/recipes/recipe/recipe.component';
import { CookersComponent } from './pages/cookers/cookers.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'recipe/:slug', component: RecipeComponent },
  { path: 'cookers', component: CookersComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FrontModule {}
