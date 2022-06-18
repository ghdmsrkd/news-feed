import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from "@nestjs/common"

import { Observable } from "rxjs"
import { map } from "rxjs/operators"
import { v4 as uuidv4 } from "uuid"

@Injectable()
export class GlobalResponseInterceptor implements NestInterceptor {
  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    const date = new Date()

    return next.handle().pipe(
      map((data) => {
        return {
          request_id: uuidv4(),
          status: HttpStatus.OK,
          timestamp: date.toISOString(),
          result: data,
        }
      }),
    )
  }
}
