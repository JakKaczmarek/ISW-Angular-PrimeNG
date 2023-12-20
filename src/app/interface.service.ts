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
      case 'desktop':
        return this.getSuggestedDesktopLanguages(requirements, userExperience);
      case 'data-science':
        return this.getSuggestedDataScienceLanguages(
          requirements,
          userExperience
        );
      case 'iot':
        return this.getSuggestedIoTLanguages(requirements, userExperience);
      case 'game-dev':
        return this.getSuggestedGameDevLanguages(requirements, userExperience);
      case 'backend':
        return this.getSuggestedBackendLanguages(requirements, userExperience);
      case 'ml-ai':
        return this.getSuggestedMLAILanguages(requirements, userExperience);
      case 'mixed-reality':
        return this.getSuggestedMixedRealityLanguages(
          requirements,
          userExperience
        );
      default:
        return [];
    }
  }

  private getSuggestedWebLanguages(
    requirements: string,
    userExperience: string
  ): string[] {
    if (requirements === 'high performance' && userExperience === 'expert') {
      return ['JavaScript', 'TypeScript'];
    } else {
      return ['HTML', 'CSS', 'JavaScript', 'PHP'];
    }
  }

  private getSuggestedMobileLanguages(
    requirements: string,
    userExperience: string
  ): string[] {
    if (requirements === 'scalability' && userExperience === 'intermediate') {
      return ['Java', 'Kotlin'];
    } else {
      return ['Kotlin', 'React Native', 'Java', 'Scala', 'Dart'];
    }
  }

  private getSuggestedIOSLanguages(
    requirements: string,
    userExperience: string
  ): string[] {
    if (requirements === 'ios development' && userExperience === 'expert') {
      return ['Objective-C'];
    } else {
      return ['Swift'];
    }
  }

  private getSuggestedDesktopLanguages(
    requirements: string,
    userExperience: string
  ): string[] {
    if (requirements === 'desktop application' && userExperience === 'expert') {
      return ['Java', 'C#'];
    } else {
      return ['Java', 'C#', 'Python'];
    }
  }

  private getSuggestedDataScienceLanguages(
    requirements: string,
    userExperience: string
  ): string[] {
    if (requirements === 'data analysis' && userExperience === 'expert') {
      return ['Python', 'R'];
    } else {
      return ['Python', 'R', 'SQL'];
    }
  }

  private getSuggestedIoTLanguages(
    requirements: string,
    userExperience: string
  ): string[] {
    if (requirements === 'iot connectivity' && userExperience === 'expert') {
      return ['C', 'Python'];
    } else {
      return ['C', 'Python', 'Java'];
    }
  }

  private getSuggestedGameDevLanguages(
    requirements: string,
    userExperience: string
  ): string[] {
    if (requirements === 'game development' && userExperience === 'expert') {
      return ['Unity', 'C#'];
    } else {
      return ['Unity', 'C#', 'Java'];
    }
  }

  private getSuggestedBackendLanguages(
    requirements: string,
    userExperience: string
  ): string[] {
    if (requirements === 'backend services' && userExperience === 'expert') {
      return ['Node.js', 'Python', 'Java'];
    } else {
      return ['Node.js', 'Python', 'Java', 'C#'];
    }
  }

  private getSuggestedMLAILanguages(
    requirements: string,
    userExperience: string
  ): string[] {
    if (requirements === 'machine learning' && userExperience === 'expert') {
      return ['Python', 'TensorFlow', 'PyTorch'];
    } else {
      return ['Python', 'TensorFlow', 'PyTorch', 'Java'];
    }
  }

  private getSuggestedMixedRealityLanguages(
    requirements: string,
    userExperience: string
  ): string[] {
    if (requirements === 'ar-vr development' && userExperience === 'expert') {
      return ['Unity', 'C#'];
    } else {
      return ['Unity', 'C#', 'Java'];
    }
  }
}
