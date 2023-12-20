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

  requirementsOptions: any[] = [
    { label: 'High performance', value: 'high performance' },
    { label: 'Scalability', value: 'scalability' },
  ];

  userExperienceOptions: any[] = [
    { label: 'Expert', value: 'expert' },
    { label: 'Intermediate', value: 'intermediate' },
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

    this.suggestedLanguages.emit(suggestedLanguages);

    // Czyszczenie formularza po wysłaniu
    this.clearForm();
  }

  clearForm() {
    this.projectType = '';
    this.requirements = '';
    this.userExperience = '';
  }
}
