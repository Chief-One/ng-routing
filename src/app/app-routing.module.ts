import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { FormsModule }    from '@angular/forms';

import { PageNotFoundComponent } from './not-found.component';
import { ComposeMessageComponent } from './compose-message.component';
import { CanDeactivateGuard } from "app/can-deactivate.guard.service";

const appRoutes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    ),
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
  providers: [CanDeactivateGuard]
})
export class AppRoutingModule { }