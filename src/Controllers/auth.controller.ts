import UserService from "../Services/auth.service"

export default class UserController {

  private userService: UserService;

  constructor() {
    this.userService = new UserService()
  }

  public async registration(req, res) {
    console.log(req.body)

    try {
      let { name, password, email, role } = req.body;
      let result = await this.userService.registration(name, password, email, role)
      res.sendStatus(200)
    } catch (error) {
      res.sendStatus(500)
      console.log(error);

    }
  }

  public async login(req, res) {
    try {
      let { email, password } = req.body;
      let token = await this.userService.login(email, password)
      res.status(200).json({
        token: `Bearer ${token}`
      })

    } catch (error) {
      res.sendStatus(401)
      console.log(error)
    }

  }
}
