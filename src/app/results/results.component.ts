import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { languagesData } from '../languagesData';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit, OnChanges {
  selectedLanguages: string[] = [];
  languagesData: any[] = languagesData;

  @Input() suggestedLanguages: string[] | undefined;

  ngOnInit() {
    this.filterLanguagesData();
  }

  ngOnChanges() {
    this.filterLanguagesData();
  }

  filterLanguagesData() {
    if (this.suggestedLanguages && this.suggestedLanguages.length) {
      if (languagesData) {
        this.languagesData = languagesData.filter(
          (language) =>
            this.suggestedLanguages &&
            this.suggestedLanguages.includes(language.name)
        );
      }
    }
  }
}
