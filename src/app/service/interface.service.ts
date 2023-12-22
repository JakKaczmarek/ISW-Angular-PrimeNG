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
    switch (projectType) {
      case 'web':
        return this.getSuggestedWebLanguages(requirements, userExperience);
      case 'mobile':
        return this.getSuggestedMobileLanguages(requirements, userExperience);
      case 'ios':
        return this.getSuggestedIOSLanguages(requirements, userExperience);
      case 'game-dev':
        return this.getSuggestedGameDevLanguages(requirements, userExperience);
      case 'backend':
        return this.getSuggestedBackendLanguages(requirements, userExperience);
      case 'ml-ai':
        return this.getSuggestedMLAITechnologies(requirements, userExperience);

      default:
        return [];
    }
  }

  private getSuggestedWebLanguages(
    requirements: string,
    userExperience: string
  ): string[] {
    if (requirements === 'high performance') {
      return this.getSuggestedWebHighPerformanceTechnologies(userExperience);
    } else if (requirements === 'scalability') {
      return this.getSuggestedWebScalabilityTechnologies(userExperience);
    } else {
      return this.getSuggestedWebDefaultTechnologies(userExperience);
    }
  }

  private getSuggestedWebHighPerformanceTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['HTML', 'CSS'];
      case 'Advanced':
        return ['HTML', 'CSS', 'Python'];
      case 'Expert':
        return ['HTML', 'CSS', 'Python', 'Java', 'C#'];
      default:
        return [];
    }
  }

  private getSuggestedWebScalabilityTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['HTML', 'CSS'];
      case 'Advanced':
        return ['HTML', 'CSS', 'Python'];
      case 'Expert':
        return ['HTML', 'CSS', 'Python', 'Java'];
      default:
        return [];
    }
  }

  private getSuggestedWebDefaultTechnologies(userExperience: string): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['HTML', 'CSS'];
      case 'Advanced':
        return ['HTML', 'CSS', 'JavaScript'];
      case 'Expert':
        return ['HTML', 'CSS', 'JavaScript', 'TypeScript'];
      default:
        return [];
    }
  }

  private getSuggestedMobileLanguages(
    requirements: string,
    userExperience: string
  ): string[] {
    if (requirements === 'high performance') {
      return this.getSuggestedMobileHighPerformanceTechnologies(userExperience);
    } else if (requirements === 'scalability') {
      return this.getSuggestedMobileScalabilityTechnologies(userExperience);
    } else {
      return this.getSuggestedMobileDefaultTechnologies(userExperience);
    }
  }

  private getSuggestedMobileHighPerformanceTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['Kotlin', 'Java'];
      case 'Advanced':
        return ['Kotlin', 'Java', 'Swift'];
      case 'Expert':
        return ['Kotlin', 'Java', 'Swift', 'C++'];
      default:
        return [];
    }
  }

  private getSuggestedMobileScalabilityTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['Kotlin', 'Java'];
      case 'Advanced':
        return ['Kotlin', 'Java', 'JavaScript'];
      case 'Expert':
        return ['Kotlin', 'Java', 'JavaScript', 'Swift'];
      default:
        return [];
    }
  }

  private getSuggestedMobileDefaultTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['Kotlin', 'Java'];
      case 'Advanced':
        return ['Kotlin', 'Java', 'JavaScript'];
      case 'Expert':
        return ['Kotlin', 'Java', 'JavaScript', 'Swift'];
      default:
        return [];
    }
  }

  private getSuggestedIOSLanguages(
    requirements: string,
    userExperience: string
  ): string[] {
    if (requirements === 'high performance') {
      return this.getSuggestedIOSHighPerformanceTechnologies(userExperience);
    } else if (requirements === 'scalability') {
      return this.getSuggestedIOSScalabilityTechnologies(userExperience);
    } else {
      return this.getSuggestedIOSDefaultTechnologies(userExperience);
    }
  }

  private getSuggestedIOSHighPerformanceTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
      case 'Advanced':
        return ['Swift', 'Java'];
      case 'Expert':
        return ['Objective-C', 'Swift'];
      default:
        return [];
    }
  }

  private getSuggestedIOSScalabilityTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
      case 'Advanced':
        return ['Swift', 'Objective-C'];
      case 'Expert':
        return ['Swift', 'Objective-C', 'Java'];
      default:
        return [];
    }
  }

  private getSuggestedIOSDefaultTechnologies(userExperience: string): string[] {
    switch (userExperience) {
      case 'Beginner':
      case 'Advanced':
        return ['Swift'];
      case 'Expert':
        return ['Objective-C', 'Swift'];
      default:
        return [];
    }
  }

  private getSuggestedGameDevLanguages(
    requirements: string,
    userExperience: string
  ): string[] {
    if (requirements === 'high performance') {
      return this.getSuggestedGameDevHighPerformanceTechnologies(
        userExperience
      );
    } else if (requirements === 'scalability') {
      return this.getSuggestedGameDevScalabilityTechnologies(userExperience);
    } else {
      return this.getSuggestedGameDevDefaultTechnologies(userExperience);
    }
  }

  private getSuggestedGameDevHighPerformanceTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['C++', 'C#'];
      case 'Advanced':
        return ['C++', 'C#', 'Java', 'C++'];
      case 'Expert':
        return ['C++', 'C#', 'Java', 'Swift', 'JavaScript'];
      default:
        return [];
    }
  }

  private getSuggestedGameDevScalabilityTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['C++', 'C#', 'JavaScript'];
      case 'Advanced':
        return ['C++', 'C#', 'Java', 'JavaScript'];
      case 'Expert':
        return ['C++', 'C#', 'Java', 'Python', 'JavaScript'];
      default:
        return [];
    }
  }

  private getSuggestedGameDevDefaultTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['C++', 'C#'];
      case 'Advanced':
        return ['C++', 'C#', 'Java'];
      case 'Expert':
        return ['C++', 'C#', 'Java', 'Python', 'JavaScript'];
      default:
        return [];
    }
  }

  private getSuggestedBackendLanguages(
    requirements: string,
    userExperience: string
  ): string[] {
    if (requirements === 'high performance') {
      return this.getSuggestedBackendHighPerformanceTechnologies(
        userExperience
      );
    } else if (requirements === 'scalability') {
      return this.getSuggestedBackendScalabilityTechnologies(userExperience);
    } else {
      return this.getSuggestedBackendDefaultTechnologies(userExperience);
    }
  }

  private getSuggestedBackendHighPerformanceTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['JavaScript', 'Python'];
      case 'Advanced':
        return ['JavaScript', 'Python', 'Java', 'C#'];
      case 'Expert':
        return ['JavaScript', 'Python', 'Java', 'C#', 'Go'];
      default:
        return [];
    }
  }

  private getSuggestedBackendScalabilityTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['JavaScript', 'Python'];
      case 'Advanced':
        return ['JavaScript', 'Python', 'Java', 'Go'];
      case 'Expert':
        return ['JavaScript', 'Python', 'Java', 'Go', 'C#'];
      default:
        return [];
    }
  }

  private getSuggestedBackendDefaultTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['JavaScript', 'Python'];
      case 'Advanced':
        return ['JavaScript', 'Python', 'Java', 'C#'];
      case 'Expert':
        return ['JavaScript', 'Python', 'Java', 'C#', 'Go'];
      default:
        return [];
    }
  }

  private getSuggestedMLAITechnologies(
    requirements: string,
    userExperience: string
  ): string[] {
    if (requirements === 'high performance') {
      return this.getSuggestedMLAIHighPerformanceTechnologies(userExperience);
    } else if (requirements === 'scalability') {
      return this.getSuggestedMLAIScalabilityTechnologies(userExperience);
    } else {
      return this.getSuggestedMLAIDefaultTechnologies(userExperience);
    }
  }

  private getSuggestedMLAIHighPerformanceTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['Python', 'Java'];
      case 'Advanced':
        return ['Python', 'Java', 'Julia'];
      case 'Expert':
        return ['Python', 'Java', 'Julia', 'JavaScript'];
      default:
        return [];
    }
  }

  private getSuggestedMLAIScalabilityTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['Python', 'Java'];
      case 'Advanced':
        return ['Python', 'Java', 'Julia', 'JavaScript'];
      case 'Expert':
        return ['Python', 'Java', 'Julia', 'JavaScript', 'Go'];
      default:
        return [];
    }
  }

  private getSuggestedMLAIDefaultTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['Python', 'Java'];
      case 'Advanced':
        return ['Python', 'Java', 'Julia', 'JavaScript'];
      case 'Expert':
        return ['Python', 'Java', 'Julia', 'JavaScript', 'Go'];
      default:
        return [];
    }
  }
}
