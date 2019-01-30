/**
 * @author Anthony Nahas
 * @since 01.2019
 * @version 1.0
 */
import { InjectionToken } from '@angular/core';

export interface Config {
  title: string;
  description: string;
  url: string;
  imgUrl?: string;
  domain?: string;
  about?: string;
  skills?: string[];
  techStack?: string[];

  social?: {
    twitterUserName?: string;
    facebookUserName?: string;
    githubUserName?: string;
    linkedInUserName?: string;
  };

  address?: {
    street?: string;
    zip?: string;
    city?: string;
    state?: string;
    country?: string;
  };
}

export const DEFAULT_CONFIG: Config = {
  title: 'Angular Material Freenlancer Theme',
  description: 'Web Developer - Graphic Artist - User Experience Designer',
  url: 'https://github.com/angular-material-extensions/freelancer-theme',
  domain: 'github.com',
  about:
    'This Freelancer Theme is a free material theme created by angular material extensions based on Start' +
    ' Bootstrap.The download includes the complete source files including HTML, CSS, and JavaScript as well as ' +
    "optional LESS stylesheets for easy customization. Whether you're a student looking to showcase your work, a" +
    ' professional looking to attract clients, or a graphic artist looking to share your projects, this template ' +
    'is the perfect starting point!',
  address: {
    country: 'Germany',
    state: 'Niedersachen',
    city: 'Göttingen',
    street: 'meine Strasse',
    zip: '0000'
  }
};

export const ConfigToken = new InjectionToken<Config>('AngularMaterialFreelancerThemeConfig');
