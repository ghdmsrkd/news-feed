import { TAdminPayload } from "../common/nest/decorator/admin.decorator"
import { TStudnetPayload } from "../common/nest/decorator/student.decorator"

export {}

declare global {
  namespace Express {
    interface Request {
      payload: {
        student?: TStudnetPayload
        admin?: TAdminPayload
      }
    }
  }
}
