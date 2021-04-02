import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./user";

@Entity()
export class Role {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany((type) => User, (user: User) => user.role)    
  users: User[];
  
}