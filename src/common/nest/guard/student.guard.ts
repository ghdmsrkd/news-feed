import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
} from "@nestjs/common"
import StudentRepository from "../../database/ddb/student/student.repo"

@Injectable()
export class StudentGuard implements CanActivate {
  constructor(
    @Inject(StudentRepository)
    private readonly studentRepository: StudentRepository,
  ) {}
  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const request = ctx.switchToHttp().getRequest()

    // jwt 토큰을 발급 하진 않았지만 student_id를 jwt 토큰이라고 가정하고 인증/인가 과정을 거친다.
    const token: string = request.headers.authorization?.split("Bearer ")[1]
    const studentModel = await this.studentRepository.getStudentById(token)
    request.payload = {
      student: { ...studentModel },
    }
    return token === studentModel?.student_id ? true : false
  }
}
