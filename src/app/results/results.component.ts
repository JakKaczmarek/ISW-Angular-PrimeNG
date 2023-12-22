import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { languagesData } from '../languagesData';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit, OnChanges {
  // Inicjalizacja pustej tablicy przechowującej wybrane języki oraz tablicy danych
  selectedLanguages: string[] = [];
  languagesData: any[] = languagesData;

  // Wejście dla komponentu, zawierającego sugerowane języki
  @Input() suggestedLanguages: string[] | undefined;

  // Metoda wywoływana przy inicjalizacji komponentu
  ngOnInit() {
    this.filterLanguagesData();
  }

  // Metoda wywoływana przy zmianie wejść komponentu
  ngOnChanges() {
    this.filterLanguagesData();
  }

  // Filtruje dane językowe na podstawie sugerowanych języków
  filterLanguagesData() {
    // Sprawdzamy, czy istnieją sugerowane języki i czy tablica jest niepusta
    if (this.suggestedLanguages && this.suggestedLanguages.length) {
      // Sprawdzamy, czy istnieją dane językowe
      if (languagesData) {
        // Filtrujemy dane językowe, aby zawierały tylko te, które są sugerowane
        this.languagesData = languagesData.filter(
          (language) =>
            this.suggestedLanguages &&
            this.suggestedLanguages.includes(language.name)
        );
      }
    }
  }
}
