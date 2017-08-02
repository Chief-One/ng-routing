import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route, Routes } from '@angular/router'

import { HeroesModule }     from './heroes/heroes.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
