import { createHash } from "crypto";
import { check } from "express-validator";
import { resolve } from "url";
import { Role } from "../Entity/role";
import { User } from "../Entity/user";
import * as bcrypt from "bcryptjs";
import { getRepository } from "typeorm";

// const salt = 10
export default class UserService {
  // userName: string;
  // userEmail: string;
  // userPassword: string;

  constructor() {

  }

  async registration(name: string, password: string, email: string, role:Role) {

    // User Creation  
    let salt = 10
    let hashPassword = await bcrypt.hash(password, salt)
    // let user = await User.create({ email, password:hashPassword, userName:name , role})
    

    let user = new User();
    user.userName = name;
    user.password = hashPassword;
    user.email = email;
    user.role = role;
    user.salt = salt;

    await user.save();

    return user

  }


  async login(password:string, email:string) {

    //User Login
    
    const user = await getRepository(User).findOne({ email })
    if(user){
      const hashClietPassword = await bcrypt.hash(password, user.salt)
      // const check = await bcrypt.compare(password, user.password)
      if (hashClietPassword  ===  user.password) {
        return true
      }
      

    }
    return false
  }
}

