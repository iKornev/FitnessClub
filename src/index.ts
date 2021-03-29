import "reflect-metadata";
import { createConnection } from "typeorm";
import { Exercise } from "./Entity/exercise";
import { Program } from "./Entity/program";
import { Role } from "./Entity/role";
import { User } from "./Entity/user";
import * as path from "path"
const __dirname = path.resolve();
import * as express from "express"

const app = express()
const port = 5000

createConnection()
  .then(async connection => {



    //User Creation
    console.log("Inserting a new user into the database...");
    console.log(User)

    const user = new User();
    user.userName = "Timber";
    user.age = 25;
    user.role = Role['Admin'];
    user.email = "password";
    user.password = "email";

    if (!user) {
      await connection.manager.save(user);
      console.log("Saved a new user with id: " + user.id);
      console.log("Loading users from the database...");
      const users = await connection.manager.find(User);
      console.log("Loaded users: \n", users);
    }
    const checkUsers = await connection.manager.find(User)
    console.log("Loaded users: \n", checkUsers)

    // //Program Creation
    // const program = new Program();
    // program.name = "Some program";
    // program.description = "Description of the program";
    // program.duration = "30 days";
    // program.exercisesName = Exercise[1];
    // program.users = User[14]

    // await connection.manager.save(program);
    // console.log("Saved a new program with id: " + program.id);
    // console.log("Loading programs from the database...");
    // const programs = await connection.manager.find(Program);
    // console.log("Loaded programs: \n", programs);

    // // Role Creation
    // const role = new Role();
    // role.user = User["Admin"]

    // await connection.manager.save(role);
    // console.log("Saved a new role with id: " + role.id);
    // console.log("Loading roles from the database...");
    // const roles = await connection.manager.find(Role);
    // console.log("Loaded roles: \n", roles);

    // // Create Exercise

    // const exercise = new Exercise();
    // exercise.exercisesName = Program[1];

    // await connection.manager.save(exercise);
    // console.log("Saved a new exercise with id: " + exercise.id);
    // console.log("Loading exercise from the database...");
    // const exercises = await connection.manager.find(Exercise);
    // console.log("Loaded exercises: \n", exercises);



  }).catch(error => console.log(error));

//Start Server

async function start() {
  try {
    const connection = await createConnection()

    app.get('/', (req, res) => res.send('Anouther adress'))
    app.get('/', (req, res) => res.send('Hello World!!!!'))
    app.listen(port, () => console.log(`App has been started on port ${port} `))
  } catch (error) {
    console.log('Server Error', error.message)
    process.exit(1)
  }
}

start()


