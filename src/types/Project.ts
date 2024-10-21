export type tech = {
  name: string;
  color: string;
};

export interface Project {
  id: string;
  name: string;
  description: string;
  img: string;
  github: string;
  deploy: string;
  techs: tech[];
}
