import { Router as ExpressRouter } from 'express'
import * as passport from 'passport'

// import ProgramController from '../Controllers/program.controller'


export default class ProgramRoute {
  private programController;
  
  private router;

  constructor() {
    
    this.router = ExpressRouter()
    
  }

  public getRouters() {

    this
    .router.get('/programs', passport.authenticate('jwt', {session:false}),(req, res) => {
      // console.log('work')
      // this.programController.getAll(req, res) 
    return res.json({"programs":"sorry there is no program"})
    
    });
      
  
    return this.router
  }



}
