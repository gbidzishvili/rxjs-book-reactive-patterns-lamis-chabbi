import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { Recipe } from './models/recipe.model';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  filtredRecipes: Recipe[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(public http: HttpClient, private service: RecipeService) {}
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  ngOnInit(): void {
    this.service.recipes$
      .pipe(takeUntil(this.destroy$))
      .subscribe((recipes: any) => {
        this.recipes = recipes;
        this.filtredRecipes = recipes;
        console.log('recipes are:', recipes.slice);
      });
  }
  // filterResults() {
  //   this.filterResults = this.recipes.filter(
  //     (recipe) => recipe.title?.indexOf(this.recipeForm.value.title) != -1
  //   );
  // }
}
