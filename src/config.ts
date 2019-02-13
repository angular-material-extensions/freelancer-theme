import { Config, Project } from './config.interface';
import { InjectionToken } from '@angular/core';

export { Config } from './config.interface';

const exampleProjectDescription: string =
  'Lorem ipsum dolor sit amet, ' +
  'consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil,' +
  ' molestias magnam, recusandae quos quis inventore quisquam velit asperiores,' +
  ' vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.';

const projects: Project[] = [
  {
    name: 'project name',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/cabin.png'
  },
  {
    name: 'project name',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/cake.png'
  },
  {
    name: 'project name',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/circus.png'
  },
  {
    name: 'project name',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/game.png'
  },
  {
    name: 'project name',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/safe.png'
  },
  {
    name: 'project name',
    description: exampleProjectDescription,
    imageURL: 'assets/img/portfolio/submarine.png'
  }
];

export const DEFAULT_CONFIG: Config = {
  title: 'Angular Material Freenlancer Theme',
  description: 'Web Developer - Graphic Artist - User Experience Designer',
  url: 'https://github.com/angular-material-extensions/freelancer-theme',
  domain: 'github.com',
  projects: projects,
  about: {
    section1:
      'This Freelancer Theme is a free material theme created by angular material extensions based on Start' +
      ' Bootstrap.The download includes the complete source files including HTML, CSS, and JavaScript as well as ' +
      'optional LESS stylesheets for easy customization.',
    section2:
      'Whether you are a student looking to showcase your work, a' +
      ' professional looking to attract clients, or a graphic artist looking to share your projects, this template ' +
      'is the perfect starting point!'
  },
  social: {
    facebook: 'https://www.facebook.com/',
    twitter: 'https://twitter.com/ngAnthonyy',
    github: 'https://github.com/AnthonyNahas',
    linkedin: 'https://www.linkedin.com/in/anthony-nahas-926245119/'
  },
  address: {
    country: 'Germany',
    state: 'Niedersachen',
    city: 'Göttingen',
    street: 'meine Strasse',
    zip: '1234'
  }
};

export const ConfigToken = new InjectionToken<Config>('AngularMaterialFreelancerThemeConfig');
