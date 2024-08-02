import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, map, Observable, Subject, takeUntil, tap } from 'rxjs';
import { Recipe } from './models/recipe.model';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes$ = this.service.recipes$;
  filterRecipesAction$ = this.service.filterRecipesAction$;
  filtredRecipes$ = combineLatest([
    this.recipes$,
    this.filterRecipesAction$,
  ]).pipe(
    map(([recipes, filter]: [Recipe[], Recipe]) => {
      return recipes.filter((recipe) => {
        return (
          recipe.title
            ?.toLowerCase()
            .indexOf(filter?.title?.toLowerCase() ?? '') != -1
        );
      });
    })
  );
  constructor(public http: HttpClient, private service: RecipeService) {}
}
