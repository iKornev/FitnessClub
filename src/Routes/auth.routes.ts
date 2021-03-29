import { Router as ExpresRouter } from 'express'
import UserController from '../Controllers/auth.controller'


const router = new ExpresRouter


export default class AuthRoute {
  private userController;
  private router

  constructor() {
    this.userController = new UserController();
    this.router = ExpresRouter()
  }

  getRouters() {

    router.post('auth/registration', (req, res) => { this.userController.registration(req, res) })
  }

}




