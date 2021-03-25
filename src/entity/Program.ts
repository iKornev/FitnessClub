import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable} from "typeorm";
import{Exercise} from "./Exercise";
import { User } from "./User";

@Entity()
export class Program {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    // @CreateDateColumn();
    // createdAt: string;

    @Column()
    duration: string;

    @OneToMany(() => Exercise, exercise => exercise.exercisesName)
    exercisesName: Exercise[];

    @ManyToMany(() => User, user => user.programs)
    @JoinTable()
    users: User[]

    
}