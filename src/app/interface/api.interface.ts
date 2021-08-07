import { JoiError } from './joi.interface';

export interface BodyDetailsForDeveloper {
      message?: JoiError;
      errorMessage?: JoiError;
      [key: string]: JoiError;
}

export interface BodyDetailsForClient {
      message?: string;
      errorMessage?: string;
      [key: string]: string;
}

/**
 *@description interface use for format response type for server
 */
export interface ResponseForDeveloper<T> {
      data?: T;
      details?: BodyDetailsForDeveloper;
}

/**
 *@description interface response to client
 */
export interface ResponseForClient<T> {
      data?: T;
      details?: BodyDetailsForClient;
}
