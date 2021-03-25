import "reflect-metadata";
import {createConnection} from "typeorm";
import { Exercise } from "./entity/Exercise";
import { Program } from "./entity/Program";
import { Role } from "./entity/Role";
import {User} from "./entity/User";
// import {Role} from "./entity/Role";



createConnection()

    .then(async connection => {

    //User Creation
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.userName = "Timber";
    user.age = 25;
    user.role = Role['ADmin'];

    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);
    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: \n", users);
    
    //Program Creation
    const program = new Program();
    program.name = "Some program";
    program.description = "Description of the program";
    program.duration = "30 days";
    program.exercisesName = Exercise[1];
    program.users = User[14]

    await connection.manager.save(program);
    console.log("Saved a new program with id: " + program.id);
    console.log("Loading programs from the database...");
    const programs = await connection.manager.find(Program);
    console.log("Loaded programs: \n", programs);

    // Role Creation
    const role = new Role();
    role.user = User["Admin"]

    await connection.manager.save(role);
    console.log("Saved a new role with id: " + role.id);
    console.log("Loading roles from the database...");
    const roles = await connection.manager.find(Role);
    console.log("Loaded roles: \n", roles);

    // Create Exercise

    const exercise = new Exercise();
    exercise.exercisesName = Program[1];

    await connection.manager.save(exercise);
    console.log("Saved a new exercise with id: " + exercise.id);
    console.log("Loading exercise from the database...");
    const exercises = await connection.manager.find(Exercise);
    console.log("Loaded exercises: \n", exercises);



}).catch(error => console.log(error));
