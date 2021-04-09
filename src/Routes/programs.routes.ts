import { Router as ExpressRouter } from 'express'
import * as passport from 'passport'
import ProgramController from '../Controllers/program.controller'

// passport.authenticate('jwt', { session: false })


export default class ProgramRoute {
  private programController;

  private router;

  constructor() {
    this.programController = new ProgramController()
    this.router = ExpressRouter()

  }

  public getRouters() {

    this
      .router.post('/programCreation', (req, res) => {
        console.log('post method work')
        this.programController.programCreation(req, res)
      });

    this
      .router.get('/programs', (req, res) => {
        console.log('get method work')
        this.programController.findAll(req, res)
      });

    this
      .router.get('/program:id', (req, res) => {
        console.log('get one work')
        this.programController.findOne(req, res)
      })


    this
      .router.put('/programEdit:id', (req, res) => {
        console.log('put one work')
        this.programController.editProgram(req, res)
      })

    this
      .router.delete('/programEdit:id', (req, res) => {
        console.log('delete work')
        this.programController.deleteProgram(req, res)
      })


    return this.router
  }



}
