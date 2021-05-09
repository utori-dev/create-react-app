import path from 'path';
import { ProjectConfig, ProjectType } from '../types/ProjectConfig';
import { ResultType, SimpleResult, UnknownErrorResult } from '../types/Result';
import resolveProjectPath from './resolveProjectPath';

function createValidationError(data: any, property: keyof ProjectConfig, expectedType: 'string'): UnknownErrorResult {
  return {
    type: ResultType.UNKNOWN_ERROR,
    error: data,
    message: `'${property}' should be a '${expectedType}' but is a '${typeof data[property]}'`,
  };
}

const normalize = (value: string) => value.toLowerCase().replace(/[_-\s]/g, '-');

function isValidProjectType(projectType: any): boolean {
  const normalizedProjectType = normalize(projectType);
  return !!Object.values(ProjectType).find(type => normalize(type) === normalizedProjectType);
}

function validateProjectConfig(data: any = {}): SimpleResult<ProjectConfig> {
  if (typeof data !== 'object') {
    return {
      type: ResultType.UNKNOWN_ERROR,
      error: data,
      message: `Configuration data should be an object but is a '${typeof data}'`,
    };
  }

  const {
    projectType,
    sourceDirectory = 'src',
    entryFile = path.join(sourceDirectory, 'index.ts'),
    outputDirectory = 'dist',
  } = data as ProjectConfig;

  if (typeof projectType !== 'string') return createValidationError(data, 'projectType', 'string');
  if (!isValidProjectType(projectType)) {
    return {
      type: ResultType.UNKNOWN_ERROR,
      error: data,
      message: `'projectType' should be one of [${Object.values(ProjectType)}] but was '${projectType}'`,
    };
  }

  if (typeof sourceDirectory !== 'string') return createValidationError(data, 'sourceDirectory', 'string');
  if (typeof entryFile !== 'string') return createValidationError(data, 'entryFile', 'string');
  if (typeof outputDirectory !== 'string') return createValidationError(data, 'outputDirectory', 'string');

  const resolvedSourceDirectory = resolveProjectPath(sourceDirectory);
  if (!resolvedSourceDirectory.data) return resolvedSourceDirectory as UnknownErrorResult;

  const resolvedEntryFile = resolveProjectPath(entryFile);
  if (!resolvedEntryFile.data) return resolvedEntryFile as UnknownErrorResult;

  const resolvedOutputDirectory = resolveProjectPath(outputDirectory);
  if (!resolvedOutputDirectory.data) return resolvedOutputDirectory as UnknownErrorResult;


  return {
    data: {
      projectType,
      sourceDirectory: resolvedSourceDirectory.data,
      entryFile: resolvedEntryFile.data,
      outputDirectory: resolvedOutputDirectory.data,
    },
  };
}

export default validateProjectConfig;
