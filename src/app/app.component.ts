import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-form (suggestedLanguages)="onSuggestedLanguages($event)"></app-form>
    <app-results [suggestedLanguages]="suggestedLanguages"></app-results>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  suggestedLanguages: string[] | undefined;

  onSuggestedLanguages(suggestedLanguages: string[]) {
    this.suggestedLanguages = suggestedLanguages;
  }
}
