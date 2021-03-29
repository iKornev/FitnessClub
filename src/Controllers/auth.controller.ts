import UserService from "../Services/auth.service"

export default class UserController {

  userService

  constructor() {
    this.userService = new UserService()
  }

  async registration(req, res) {

    try {
      let { name, password, email } = req.body;
      let result = await this.userService.registration(name, password, email)
      res.send(200)
    } catch (error) {
      res.send(500)
      console.log(error);

    }
  }
}
