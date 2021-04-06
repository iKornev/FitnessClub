import { Role } from "../Entity/role";
import { User } from "../Entity/user";
import * as bcrypt from "bcryptjs";
import { getRepository } from "typeorm";
import * as jwt from "jsonwebtoken";


// const salt = 10
export default class UserService {
  // userName: string;
  // userEmail: string;
  // userPassword: string;

  constructor() {

  }

  async registration(name: string, password: string, email: string, role: Role) {

    // User Creation  
    let salt = 10
    let hashPassword = await bcrypt.hash(password, salt)

    // Проверка существования пользователя
    // const canidate = await getRepository(User).findOne({ email })

    let user = new User();
    user.userName = name;
    user.password = hashPassword;
    user.email = email;
    user.role = role;
    user.salt = salt;

    await user.save();

    return user

  }


  async login(email: string, password: string) {

    //User Login

    const candidate = await getRepository(User).findOne({ email })

    let token = {}
    if (candidate) {


      console.log(password, candidate.password)



      const passwordResult = await bcrypt.compare(password, candidate.password)
      console.log('Hello ' + passwordResult)
      if (passwordResult) {
        // Token Generation 

        token = jwt.sign({
          email: candidate.email
        },
          'dev-jwt',
          { expiresIn: 60 * 60 }
        )
        console.log(token)

        
      }

    }
    return token
  }
}



