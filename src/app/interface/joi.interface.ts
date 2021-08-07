import { Dictionary } from '../../utils/locales/dictionary.type';

export interface JoiError {
      type: Dictionary;
      context?: Record<string, string>;
}
