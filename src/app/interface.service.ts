import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InterfaceService {
  constructor() {}
  getSuggestedLanguages(
    projectType: string,
    requirements: string,
    userExperience: string
  ): string[] {
    if (
      projectType === 'web' &&
      requirements === 'high performance' &&
      userExperience === 'expert'
    ) {
      return ['JavaScript', 'TypeScript'];
    } else if (
      projectType === 'mobile' &&
      requirements === 'scalability' &&
      userExperience === 'intermediate'
    ) {
      return ['Java', 'Kotlin'];
    } else {
      return ['C#', 'Python'];
    }
  }
}
