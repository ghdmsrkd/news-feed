/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from "@nestjs/common"
import SchoolRepository from "../../../common/database/ddb/school/school.repo"
import AdminRepository from "../../../common/database/ddb/admin/admin.repo"
import SchoolNewsRepository, {
  TUpdateOption,
} from "../../../common/database/ddb/school-news/school-news.repo"

@Injectable()
export class AdminSchoolService {
  constructor(
    private readonly adminRepository: AdminRepository,
    private readonly schoolRepository: SchoolRepository,
    private readonly schoolNewsRepository: SchoolNewsRepository,
  ) {}

  async createSchoolNews(school_code: string, title: string, context: string) {
    const createSchoolNewsResult =
      await this.schoolNewsRepository.createOneSchoolNews(
        school_code,
        title,
        context,
      )
    return createSchoolNewsResult
  }

  async deleteSchoolNews(school_news_id: string) {
    return this.schoolNewsRepository.deleteOneSchoolNews(school_news_id)
  }

  async updateSchoolNews(school_news_id: string, option: TUpdateOption) {
    return this.schoolNewsRepository.updateOneSchoolNews(school_news_id, option)
  }

  // 하나의 학교 페이지를 생성합니다.
  async createSchool(admin_id: string, location: string, name: string) {
    const createSchoolResult = await this.schoolRepository.createOneSchool(
      admin_id,
      location,
      name,
    )
    return createSchoolResult
  }
}
