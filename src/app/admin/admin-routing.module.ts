import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "app/admin/admin.component";
import { ManageCrisesComponent } from "app/admin/manage-crises.component";
import { ManageHeroesComponent } from "app/admin/manage-heroes.component";
import { AdminDashboardComponent } from "app/admin/admin-dashboard.component";

import { AuthGuard } from '../auth-guard.service';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'crises', component: ManageCrisesComponent },
      { path: 'heroes', component: ManageHeroesComponent },
      { path: '', component: AdminDashboardComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
