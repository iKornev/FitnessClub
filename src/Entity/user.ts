import { Entity, CreateDateColumn,PrimaryGeneratedColumn, Column, ManyToMany,ManyToOne, BaseEntity } from "typeorm";
import { Program } from "./program";
import { Role } from "./role";
import * as bcrypt from "bcryptjs";

@Entity()
export class User extends BaseEntity {   // changed

  @PrimaryGeneratedColumn()
  id: number;


  @ManyToOne(() => Role, (role: Role) => role.users)     
  public role: Role;
  

  @Column({ default: '' })
  userName: string;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  password: string;
  

  @Column({ default: 0.0 })
  age: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @ManyToMany(() => Program, program => program.users)
  programs: Program[];

  @Column()
  salt: number;
  
  
}
// const salt = 10
// let hashPassword = await bcrypt.hash(password, salt)
