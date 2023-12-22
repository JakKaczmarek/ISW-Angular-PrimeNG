import { Component, Input } from '@angular/core';
import { languagesData } from '../languagesData';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  selectedLanguages: string[] = [];
  languagesData: any[] = languagesData;

  @Input() suggestedLanguages: string[] | undefined;
}
