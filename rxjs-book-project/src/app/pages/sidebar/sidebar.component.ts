import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  filterForm!: FormGroup;
  constructor(public fb: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.filterForm = this.fb.group({
      title: [],
      category: [],
      ingredient: [],
      tags: [],
      preparationTime: [],
      cookingTime: [],
    });
  }
  filterResults() {
    console.log(this.filterForm.value);
  }
  onSubmit() {}
}
