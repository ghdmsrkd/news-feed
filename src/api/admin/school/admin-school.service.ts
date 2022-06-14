import { Injectable } from "@nestjs/common"

@Injectable()
export class AdminSchoolService {
  constructor() {}

  async createSchool() {

    return "학교 생성"
  }
}