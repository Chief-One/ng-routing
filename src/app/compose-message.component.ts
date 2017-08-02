import { Component } from '@angular/core';
import { Router }                 from '@angular/router';

@Component({
  template: `<h3>Contact Crisis Center</h3>
            <div *ngIf="details">
              {{ details }}
            </div>
            <div>
              <div>
                <label>Message: </label>
              </div>
              <div>
                <textarea [(ngModel)]="message" rows="10" cols="35" [disabled]="sending"></textarea>
              </div>
            </div>
            <p *ngIf="!sending">
              <button (click)="send()">Send</button>
              <button (click)="cancel()">Cancel</button>
            </p>`,
  styles: [ ':host { position: relative; bottom: 10%; }' ]
})

export class ComposeMessageComponent {

  message: string;
  details: string;
  sending = false;

  constructor(private router: Router) {}

  send() {
    this.sending = true;
    this.details = 'Sending Message...';

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null }}]);
  }
}