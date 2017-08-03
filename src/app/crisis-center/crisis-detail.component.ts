import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Crisis, CrisisService } from './crisis.service';
import { DialogService } from '../dialog.service';

@Component({
  template: `
  <div *ngIf="crisis">
    <h3>"{{ editName }}"</h3>
    <div>
      <label>Id: </label>{{ crisis.id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
    </div>
    <p>
      <button (click)="save()">Save</button>
      <button (click)="cancel()">Cancel</button>
    </p>
  </div>
  `,
  styles: ['input {width: 20em}']
})
export class CrisisDetailComponent implements OnInit {

  crisis: Crisis;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService,
    private crisisService: CrisisService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.crisisService.getCrisis(params.get('id'));
      }).subscribe(x => {
        this.crisis = x
        this.editName = this.crisis.name;
        this.crisis = this.crisis;
      });
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Promise<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }
}