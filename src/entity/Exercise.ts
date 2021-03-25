import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Program } from "./Program";

@Entity()
export class Exercise {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Program, program => program.exercisesName)
    exercisesName: Program;

}