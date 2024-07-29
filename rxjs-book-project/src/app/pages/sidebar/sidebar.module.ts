import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SidebarComponent],
  imports: [ReactiveFormsModule, MatButtonModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
