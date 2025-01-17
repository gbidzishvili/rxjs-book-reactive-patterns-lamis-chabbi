import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RecipeCreationComponent } from './recipe-creation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RecipeCreationComponent],
  imports: [CommonModule, MatButtonModule, ReactiveFormsModule],
  exports: [RecipeCreationComponent],
})
export class RecipeCreationModule {}
