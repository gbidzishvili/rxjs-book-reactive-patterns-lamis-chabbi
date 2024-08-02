import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  Observable,
  tap,
} from 'rxjs';
import { environment } from '../../../../environments/environment';
const BASE_PATH = environment.basePath;
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes$ = this.http
    .get<Recipe[]>(`${BASE_PATH}/recipes`)
    .pipe(tap(console.log));
  private filterRecipeSubject = new BehaviorSubject<Recipe>({ title: '' });
  filterRecipesAction$ = this.filterRecipeSubject.asObservable();
  constructor(private http: HttpClient) {}

  updateFilter(criteria: Recipe) {
    this.filterRecipeSubject.next(criteria);
  }

  saveRecipe(formValue: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(`${BASE_PATH}/formValues`, formValue);
  }
}
