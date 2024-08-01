import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RecipeCreationComponent } from './recipe-creation.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RecipeCreationComponent],
  imports: [MatButtonModule, ReactiveFormsModule],
  exports: [RecipeCreationComponent],
})
export class RecipeCreationModule {}
