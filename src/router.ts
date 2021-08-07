import * as I18n from 'i18n';
import * as cookieParser from 'cookie-parser';
import { INestApplication } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

I18n.configure({
      locales: ['en', 'vi'],
      directory: `./src/utils/locales/dictionaries`,
      cookie: 'lang',
      defaultLocale: 'en',
      missingKeyFn: (locale, value) => {
            console.log(locale);
            console.log(value);
            return value;
      },
});

export function router(app: INestApplication) {
      app.use(I18n.init);
      app.use(cookieParser());
      app.use((req: Request, res: Response, next: NextFunction) => {
            res.header('Access-Control-Allow-Methods', 'POST, GET, PUT');
            res.header('Access-Control-Allow-Headers', '*');

            const lang = req.cookies['lang'] || '';
            if (!lang) {
                  I18n.setLocale('en');
                  res.cookie('lang', 'en', { maxAge: 86400 * 30 });
            } else I18n.setLocale(lang);

            next();
      });
}
