/**
 * @author Anthony Nahas
 * @since 01.2019
 * @version 1.0
 */
export interface Config {
  title: string;
  description: string;
  url: string;
  imgUrl: string;
  domain?: string;
  skills?: string[];
  techStack?: string[];

  social: {
    twitterUserName?: string;
    facebookUserName?: string;
    githubUserName?: string;
    linkedInUserName?: string;
  };

  address: {
    street?: string;
    zip?: string;
    city?: string;
    state?: string;
    country?: string;
  };
}
