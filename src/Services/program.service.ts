import { Exercise } from "../Entity/exercise";
import { Program } from "../Entity/program";
import { getManager, getRepository } from "typeorm"
import { User } from "../Entity/user";


export default class ProgramService {

  constructor() {

  }

  async creation(name: string, description: string, duration: string, exercises: Exercise, user: User) {

    const entityManager = getManager()

    let program = new Program();

    program.name = name;
    program.description = description;
    program.duration = duration;
    // program.exercisesName = exercises[exercises.id];
    // program.users = user[user.id];


    await entityManager.save(program);

    console.log(program)

    return program
  }

  async get() {

    const entityManager = getManager()
    let programs = await entityManager.find(Program)


    return programs
  }

  async getOne(id) {

    let program = await getRepository(Program).findOne({ id: id })
    console.log(program.id)
    console.log(program)

    return program
  }

  async update(id) {

    const entityManager = getManager()
    let progForUpdate = await  entityManager;
    console.log(progForUpdate)

    return progForUpdate
  }

  async delete(id) {


  }
}

