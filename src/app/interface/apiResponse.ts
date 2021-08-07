import {
      BadGatewayException,
      BadRequestException,
      InternalServerErrorException,
      UnauthorizedException,
      NotFoundException,
      ForbiddenException,
} from '@nestjs/common';

import { LocalesService } from '../../utils/locales/locales.service';
import { ResponseForDeveloper } from './api.interface';
import { ErrorType } from './errorType.type';

class ApiResponse {
      constructor(private readonly localeService: LocalesService) {}

      /**
       *
       * @description allow translate message before send back to client
       */
      public sendError<T>(body: ResponseForDeveloper<T>, type: ErrorType) {
            const res = this.localeService.translateResponse(body);

            switch (type) {
                  case 'BadGatewayException':
                        return new BadGatewayException(res);
                  case 'BadRequestException':
                        return new BadRequestException(res);
                  case 'InternalServerErrorException':
                        return new InternalServerErrorException(res);
                  case 'UnauthorizedException':
                        return new UnauthorizedException(res);
                  case 'NotFoundException':
                        return new NotFoundException(res);
                  case 'ForbiddenException':
                        return new ForbiddenException(res);
            }
      }

      /**
       *
       * @description allow translate message before send back to client
       */
      public send<T>(body: ResponseForDeveloper<T>) {
            return this.localeService.translateResponse(body);
      }
}

export const apiResponse = new ApiResponse(new LocalesService());
