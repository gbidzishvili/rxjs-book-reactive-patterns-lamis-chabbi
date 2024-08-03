import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RecipeService } from '../recipe-list/services/recipe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  filterForm = this.fb.group({
    title: [''],
    category: [''],
    ingredients: [''],
    tags: [''],
    prepTime: [''],
    cookingTime: [''],
  });
  constructor(private service: RecipeService, public fb: FormBuilder) {}

  filterResults() {
    this.service.updateFilter(
      this.filterForm?.value as { [key: string | number]: string }
    );
  }
  onSubmit() {}
}
