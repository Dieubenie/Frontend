import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { EvenementsComponent } from './components/evenements/evenements.component';
import { TicketsComponent } from './components/tickets/tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    EvenementsComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
