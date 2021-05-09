/**
 * Type of project managed by `utori-scripts` CLI.
 */
export enum ProjectType {
  /**
   * Specifies that the project is a web app written with React.
   */
  REACT_WEB_APP = 'react-web-app',
}

/**
 * Configuration for the project.
 * This is used to configure how the commands are run.
 */
export type ProjectConfig = {

  /**
   * Type of project being managed.
   */
  projectType: ProjectType;

  /**
   * Directory where the source files are located.
   */
  sourceDirectory: string;

  /**
   * Directory where the project should be built.
   */
  outputDirectory: string;
}
