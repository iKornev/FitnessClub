import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user";

@Entity()
export class Role {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.role)
  user: User;

}