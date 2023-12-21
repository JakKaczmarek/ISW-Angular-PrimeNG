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
        return ['Node.js'];
      case 'Advanced':
        return ['Node.js', 'Python'];
      case 'Expert':
        return ['Node.js', 'Python', 'Java', 'C#'];
      default:
        return [];
    }
  }

  private getSuggestedWebScalabilityTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['Node.js'];
      case 'Advanced':
        return ['Node.js', 'Python'];
      case 'Expert':
        return ['Node.js', 'Python', 'Java'];
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
        return ['HTML', 'CSS', 'JavaScript', 'Node.js'];
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
        return ['Kotlin', 'Java', 'React Native'];
      case 'Expert':
        return ['Kotlin', 'Java', 'React Native', 'Swift'];
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
        return ['Kotlin', 'Java', 'React Native'];
      case 'Expert':
        return ['Kotlin', 'Java', 'React Native', 'Swift'];
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
        return ['Swift'];
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
        return ['Unity', 'C#'];
      case 'Advanced':
        return ['Unity', 'C#', 'Java', 'C++'];
      case 'Expert':
        return ['Unity', 'C#', 'Java', 'C++', 'Node.js'];
      default:
        return [];
    }
  }

  private getSuggestedGameDevScalabilityTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['Unity', 'C#', 'Node.js'];
      case 'Advanced':
        return ['Unity', 'C#', 'Java', 'Node.js'];
      case 'Expert':
        return ['Unity', 'C#', 'Java', 'C++', 'Node.js', 'Python'];
      default:
        return [];
    }
  }

  private getSuggestedGameDevDefaultTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['Unity', 'C#'];
      case 'Advanced':
        return ['Unity', 'C#', 'Java'];
      case 'Expert':
        return ['Unity', 'C#', 'Java', 'C++', 'Node.js'];
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
        return ['Node.js', 'Python'];
      case 'Advanced':
        return ['Node.js', 'Python', 'Java', 'C#'];
      case 'Expert':
        return ['Node.js', 'Python', 'Java', 'C#', 'Go'];
      default:
        return [];
    }
  }

  private getSuggestedBackendScalabilityTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['Node.js', 'Python'];
      case 'Advanced':
        return ['Node.js', 'Python', 'Java', 'Go'];
      case 'Expert':
        return ['Node.js', 'Python', 'Java', 'Go', 'C#'];
      default:
        return [];
    }
  }

  private getSuggestedBackendDefaultTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['Node.js', 'Python'];
      case 'Advanced':
        return ['Node.js', 'Python', 'Java', 'C#'];
      case 'Expert':
        return ['Node.js', 'Python', 'Java', 'C#', 'Go'];
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
        return ['Python', 'TensorFlow'];
      case 'Advanced':
        return ['Python', 'TensorFlow', 'PyTorch'];
      case 'Expert':
        return ['Python', 'TensorFlow', 'PyTorch', 'Java'];
      default:
        return [];
    }
  }

  private getSuggestedMLAIScalabilityTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['Python', 'TensorFlow'];
      case 'Advanced':
        return ['Python', 'TensorFlow', 'PyTorch', 'Java'];
      case 'Expert':
        return ['Python', 'TensorFlow', 'PyTorch', 'Java', 'Go'];
      default:
        return [];
    }
  }

  private getSuggestedMLAIDefaultTechnologies(
    userExperience: string
  ): string[] {
    switch (userExperience) {
      case 'Beginner':
        return ['Python', 'TensorFlow'];
      case 'Advanced':
        return ['Python', 'TensorFlow', 'PyTorch', 'Java'];
      case 'Expert':
        return ['Python', 'TensorFlow', 'PyTorch', 'Java', 'Go'];
      default:
        return [];
    }
  }
}
