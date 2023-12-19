import { Component, Output, EventEmitter } from '@angular/core';
import { InterfaceService } from '../interface.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  projectType: string = '';
  requirements: string = '';
  userExperience: string = '';

  projectTypeOptions: any[] = [
    { label: 'Web', value: 'web' },
    { label: 'Mobile', value: 'mobile' },
  ];

  @Output() suggestedLanguages: EventEmitter<string[]> = new EventEmitter<
    string[]
  >();

  constructor(private inferenceService: InterfaceService) {}

  onSubmit() {
    const suggestedLanguages = this.inferenceService.getSuggestedLanguages(
      this.projectType,
      this.requirements,
      this.userExperience
    );

    // Emituj zdarzenie z sugestiami języków
    this.suggestedLanguages.emit(suggestedLanguages);

    // Wyczyść formularz po wysłaniu
    this.clearForm();
  }

  clearForm() {
    this.projectType = '';
    this.requirements = '';
    this.userExperience = '';
  }
}
