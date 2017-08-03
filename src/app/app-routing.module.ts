import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './not-found.component';
import { ComposeMessageComponent } from './compose-message.component';
import { CanDeactivateGuard } from "app/can-deactivate.guard.service";
import { AuthGuard } from "app/auth-guard.service";

const appRoutes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule'
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
        preloadingStrategy: PreloadAllModules
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