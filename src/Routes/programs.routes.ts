import { Router as ExpressRouter } from 'express'
// import ProgramController from '../Controllers/program.controller'


export default class ProgramRoute {
  private programController;
  private router;

  constructor() {
    
    this.router = ExpressRouter()
    
  }

  public getRouters() {

    this
    .router.get('/programs', (req, res) => {
      // console.log('work')
      // this.programController.getAll(req, res) 
    return res.json({"programs":"sorry mazafaka there is no program"})
    
    });
      
  
    return this.router
  }



}
