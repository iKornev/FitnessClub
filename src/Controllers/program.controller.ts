import ProgramService from "../Services/program.service"

export default class UserController {

  private programService: ProgramService;

  constructor() {
    this.programService = new ProgramService()
  }

  public async programCreation(req, res) {


    try {
      let { name, description, duration, exercises, user } = req.body;
      let programSaveResult = await this.programService.creation(name, description, duration, exercises, user)

      res.sendStatus(200)
    } catch (error) {
      res.sendStatus(500)
      console.log(error)
    }

  }

  public async findAll(req, res) {
    try {
      let listOfAllPrograms = await this.programService.get()
      res.json(
        listOfAllPrograms
      )
    } catch (error) {
      res.sendStatus(500)
      console.log(error)
    }
  }

  public async findOne(req, res) {
    try {
      let oneProgram = await this.programService.getOne(req.params.id)
      res.json(
        oneProgram
      )
    } catch (error) {
      res.sendStatus(500)
      console.log(error)
    }
  }

  public async editProgram(req, res) {
    try {
      let editedProgram = await this.programService.update(req.params.id)
      res.json(
        editedProgram
      )
    } catch (error) {
      res.sendStatus(500)
      console.log(error)
    }
  }

  public async deleteProgram(req, res) {
    try {
      let deletedProgram = await this.programService.delete(req.params.id)
      res.json(
        deletedProgram
      )
    } catch (error) {
      res.sendStatus(500)
      console.log(error)
    }
  }


}