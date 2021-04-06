// import passport = require("passport");
// import { getRepository } from "typeorm";
// import { User } from "../Entity/user";

import passport = require("passport")
import { User } from "../Entity/user"
import { getRepository } from "typeorm";
// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require("passport-jwt").ExtractJwt; //Extractor

// export default class Passport {

//   constructor() { }



//   private options = {
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: 'dev-jwt'
//   }

//   public async authenticate(strategy, options) {

//     passport.use(
//       new JwtStrategy(this.options,

//       )
//     )



//   }

// }
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt


const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'dev-jwt'
}

module.exports = function (passport) {
  passport.use(new JwtStrategy(options, async function (jwt_payload, done) {
    try {
      const user = await getRepository(User).findOne({ email: jwt_payload.email })
console.log(user)
      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    } catch(e){
      console.log(e)
    }
    

  }))
}