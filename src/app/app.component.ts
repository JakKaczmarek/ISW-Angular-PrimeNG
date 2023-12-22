import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // Szablon zawierający komponenty formularza i wyników
  template: `
    <app-form (suggestedLanguages)="onSuggestedLanguages($event)"></app-form>
    <app-results [suggestedLanguages]="suggestedLanguages"></app-results>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Tablica przechowująca sugerowane języki
  suggestedLanguages: string[] | undefined;

  // Metoda obsługująca zdarzenie przekazywane z formularza
  onSuggestedLanguages(suggestedLanguages: string[]) {
    // Aktualizacja tablicy sugerowanych języków
    this.suggestedLanguages = suggestedLanguages;
  }
}
