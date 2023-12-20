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
    { label: 'Desktop', value: 'desktop' },
    { label: 'Data Science', value: 'data-science' },
    { label: 'IoT', value: 'iot' },
    { label: 'Game Development', value: 'game-dev' },
    { label: 'Backend Development', value: 'backend' },
    { label: 'Machine Learning / AI', value: 'ml-ai' },
    { label: 'Mixed Reality', value: 'mixed-reality' },
  ];

  requirementsOptions: any[] = [
    { label: 'High performance', value: 'high performance' },
    { label: 'Scalability', value: 'scalability' },
    { label: 'iOS development', value: 'ios development' },
    { label: 'Desktop application', value: 'desktop application' },
    { label: 'Data analysis', value: 'data analysis' },
    { label: 'IoT connectivity', value: 'iot connectivity' },
    { label: 'Game development', value: 'game development' },
    { label: 'Backend services', value: 'backend services' },
    { label: 'Machine learning', value: 'machine learning' },
    { label: 'AR/VR development', value: 'ar-vr development' },
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
