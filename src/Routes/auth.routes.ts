import { Router as ExpressRouter } from 'express'
import UserController from '../Controllers/auth.controller'





export default class AuthRoute {
  private userController;
  private router;

  constructor() {
    this.userController = new UserController();
    this.router = ExpressRouter()
    // this.router = express.Router()
  }

  public getRouters() {

    this
    .router.post('/registration', (req, res) => {
      console.log('work')
      this.userController.registration(req, res) });
      

     this 
    .router.post('/login', (req, res) => {
      this.userController.login(req,res) });
      
    return this.router
  }



}




