export {}

export type TStudnetPayload = {
  student_id: string
}

export type TAdminPayload = {
  admin_id: string
}

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
