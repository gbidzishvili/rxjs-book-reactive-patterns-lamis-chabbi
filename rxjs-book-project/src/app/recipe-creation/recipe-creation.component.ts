import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TAGS } from '../core/models/tags';
import { catchError, concatMap, of, tap } from 'rxjs';
import { RecipeService } from '../pages/recipe-list/services/recipe.service';
@Component({
  selector: 'app-recipe-creation',
  templateUrl: './recipe-creation.component.html',
  styleUrl: './recipe-creation.component.css',
})
export class RecipeCreationComponent {
  constructor(
    private formBuilder: FormBuilder,
    private service: RecipeService
  ) {}
  recipeForm = this.formBuilder.group({
    id: Math.floor(1000 + Math.random() * 9000),
    title: [''],
    ingredients: [''],
    tags: [''],
    imageUrl: [''],
    cookingTime: [''],
    yield: [''],
    prepTime: [''],
    steps: [''],
  });
  tags = TAGS;
  valueChanges$ = this.recipeForm.valueChanges.pipe(
    concatMap((formValue) => this.service.saveRecipe(formValue)),
    catchError((errors) => of(errors)),
    tap((result) => this.saveSuccess(result))
  );

  saveSuccess(result: any) {
    console.log('saved Successfully');
  }
}
