import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { RecipeComponent } from './pages/recipe-list/recipe/recipe.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SidebarModule } from './pages/sidebar/sidebar.module';
import { RecipeCreationComponent } from './recipe-creation/recipe-creation.component';
import { RecipeCreationModule } from './recipe-creation/recipe-creation.module';

@NgModule({
  declarations: [AppComponent, RecipeListComponent, RecipeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    SidebarModule,
    RecipeCreationModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
