import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from "@nestjs/common"

import { Observable } from "rxjs"
import { map } from "rxjs/operators"

@Injectable()
export class GlobalResponseInterceptor implements NestInterceptor {
  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    const date = new Date()

    return next.handle().pipe(
      map((data) => {
        return {
          status: HttpStatus.OK,
          timestamp: date.toISOString(),
          result: data,
        }
      }),
    )
  }
}
