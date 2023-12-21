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
    { label: 'iOS', value: 'ios' },
    { label: 'Game Development', value: 'game-dev' },
    { label: 'Backend Development', value: 'backend' },
    { label: 'Machine Learning / AI', value: 'ml-ai' },
  ];

  requirementsOptions: any[] = [
    { label: 'High performance', value: 'high performance' },
    { label: 'Scalability', value: 'scalability' },
  ];

  userExperienceOptions: any[] = [
    { label: 'Beginner', value: 'Beginner' },
    { label: 'Advanced', value: 'Advanced' },
    { label: 'Expert', value: 'Expert' },
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
