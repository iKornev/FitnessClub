import { Entity, CreateDateColumn, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Exercise } from "./exercise";
import { User } from "./user";

@Entity()
export class Program {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  duration: string;

  @OneToMany(() => Exercise, exercise => exercise.exercisesName)
  exercisesName: Exercise[];

  @ManyToMany(() => User, user => user.programs)
  @JoinTable()
  users: User[]


}