export enum ProjectType {
  REACT_WEB_APP = 'react-web-app',
}

export type ProjectConfig = {
  projectType: ProjectType;
  sourceDirectory: string;
  outputDirectory: string;
}
