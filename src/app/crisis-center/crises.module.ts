import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CrisisCenterComponent, CrisisCenterHomeComponent, CrisisDetailComponent]
})
export class CrisesModule { }
