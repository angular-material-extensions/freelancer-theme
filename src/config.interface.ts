/**
 * @author Anthony Nahas
 * @since 01.2019
 * @version 1.0
 */

export interface Config {
  title: string;
  description: string;
  url: string;
  imgUrl?: string;
  domain?: string;
  about?: string;
  skills?: string[];
  techStack?: string[];
  projects?: Project[];

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

export interface Project {
  name: string;
  description: string;
  imageURL?: string;
}
