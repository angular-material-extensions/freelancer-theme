/**
 * @author Anthony Nahas
 * @since 01.2019
 * @version 1.1
 */
export interface Config {
  title: string;
  description: string;
  url: string;
  imgUrl?: string;
  domain?: string;
  about?: {
    section1: string;
    section2: string;
  };
  skills?: string[];
  techStack?: string[];
  projects?: Project[];

  social?: {
    twitter?: string;
    facebook?: string;
    github?: string;
    linkedin?: string;
  };

  address?: {
    street?: string;
    zip?: string;
    city?: string;
    state?: string;
    country?: string;
  };
}

export interface Project {
  name: string;
  description: string;
  imageURL?: string;
  url?: string;
  client?: Client;
}

export interface Client {
  name: string;
  imageURL?: string;
}
