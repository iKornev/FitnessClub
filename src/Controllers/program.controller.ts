import ProgramService from "../Services/program.service"

export default class UserController {

  private programService:  ProgramService;

  constructor() {
    this.programService = new ProgramService()
  }

  

  
}