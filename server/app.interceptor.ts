import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

interface ResponseObject {
  statusCode: number;
  data?: any;
  message?: string;
}

const criticalInformations = ['password'];

@Injectable()
export class AppInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        map((res: any) => {
          if (typeof res === 'string') {
            return {
              statusCode: 200,
              message: res
            };
          } else if (typeof res === 'object' && !res.statusCode) {
            return {
              statusCode: 200,
              data: res
            };
          }
        })
      )
      .pipe(
        map((res?: ResponseObject) => {
          if (!res) throw new Error('Weird Empty Response');
          if (res.data) removeCriticalInformations(res.data);
          return res;
        })
      );
  }
}

function removeCriticalInformations(data: any) {
  if (typeof data !== 'object') return;
  for (const key of Object.keys(data)) {
    if (criticalInformations.includes(key)) delete data[key];
    else removeCriticalInformations(data[key]);
  }
}
