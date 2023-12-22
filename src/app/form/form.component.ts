import { Component, Output, EventEmitter } from '@angular/core';
import { InterfaceService } from '.././service/interface.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  // Deklaracje zmiennych przechowujących wybory użytkownika
  projectType: string = '';
  requirements: string = '';
  userExperience: string = '';

  // Dodajemy dodatkowe pola do przechowywania poprzednich wyborów
  selectedProjectType: string = '';
  selectedRequirements: string = '';
  selectedUserExperience: string = '';

  // Dostępne opcje dla każdego z rozwijanych pól
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

  // Wyjście dla komponentu nadrzędnego, informujące o zaproponowanych językach
  @Output() suggestedLanguages: EventEmitter<string[]> = new EventEmitter<
    string[]
  >();

  constructor(private inferenceService: InterfaceService) {}

  // Obsługa przycisku "Submit"
  onSubmit() {
    // Pobieranie sugerowanych języków z serwisu wnioskującego
    const suggestedLanguages = this.inferenceService.getSuggestedLanguages(
      this.projectType,
      this.requirements,
      this.userExperience
    );

    this.suggestedLanguages.emit(suggestedLanguages);

    // Zapisywanie aktualnych wyborów
    this.selectedProjectType = this.projectType;
    this.selectedRequirements = this.requirements;
    this.selectedUserExperience = this.userExperience;

    // Czyszczenie formularza po wysłaniu
    this.clearForm();
  }

  // Czyszczenie formularza
  clearForm() {
    // Aktualizujemy wartości formularza tylko jeśli użytkownik dokonał nowego wyboru
    if (
      this.projectType !== this.selectedProjectType ||
      this.requirements !== this.selectedRequirements ||
      this.userExperience !== this.selectedUserExperience
    ) {
      this.projectType = '';
      this.requirements = '';
      this.userExperience = '';
    }
  }
}
