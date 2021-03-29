import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany, BaseEntity } from "typeorm";
import { Program } from "./program";
import { Role } from "./role";

@Entity()
export class User extends BaseEntity {   // changed

  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Role, role => role.user)
  role: Role  // Role[]

  @Column({ default: '' })
  userName: string;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  password: string;

  @Column({ default: 0.0 })
  age: number;

  // @CreateDateColumn();

  @ManyToMany(() => Program, program => program.users)
  programs: Program[];

}
