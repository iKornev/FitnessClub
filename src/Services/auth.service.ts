import { Role } from "../Entity/role";
import { User } from "../Entity/user";

export default class UserService {
  userName: string;
  userEmail: string;
  userPassword: string;

  constructor() {

  }

  async registration(name: string, password: string, email: string) {

    // User Creation  

    let user = new User();

    user.userName = name;
    user.password = password;
    user.email = email;
    // user.role = Role;

    await user.save();

    return user

  }

}

