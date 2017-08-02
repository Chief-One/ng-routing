import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { FormsModule }    from '@angular/forms';

import { PageNotFoundComponent } from './not-found.component';
import { ComposeMessageComponent } from './compose-message.component';

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
        enableTracing: true, // <-- debugging purposes only
      }
    ),
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [PageNotFoundComponent, ComposeMessageComponent],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }