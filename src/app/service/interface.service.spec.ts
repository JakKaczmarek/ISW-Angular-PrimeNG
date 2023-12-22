import { InterfaceService } from './interface.service';

describe('InterfaceService', () => {
  let service: any;

  beforeEach(() => {
    service = new InterfaceService();
  });

  it('should return suggested web high-performance technologies for Beginner user', () => {
    const userExperience = 'Beginner';
    const result =
      service.getSuggestedWebHighPerformanceTechnologies(userExperience);

    expect(result).toEqual(['Node.js']);
  });
  it('should return suggested web high-performance technologies for Advanced user', () => {
    const userExperience = 'Advanced';
    const result =
      service.getSuggestedWebHighPerformanceTechnologies(userExperience);

    expect(result).toEqual(['Node.js', 'Python']);
  });

  it('should return suggested web default technologies for Expert user', () => {
    const userExperience = 'Expert';
    const result = service.getSuggestedWebDefaultTechnologies(userExperience);

    expect(result).toEqual(['HTML', 'CSS', 'JavaScript', 'Node.js']);
  });

  it('should return suggested mobile high-performance technologies for Beginner user', () => {
    const userExperience = 'Beginner';
    const result =
      service.getSuggestedMobileHighPerformanceTechnologies(userExperience);

    expect(result).toEqual(['Kotlin', 'Java']);
  });
});
