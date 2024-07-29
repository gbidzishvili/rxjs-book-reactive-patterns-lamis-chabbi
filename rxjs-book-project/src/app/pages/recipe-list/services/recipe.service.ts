import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
const BASE_PATH = environment.basePath;
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes$ = this.http.get<Recipe[]>(`${BASE_PATH}/recipes`);
  constructor(private http: HttpClient) {}
}
