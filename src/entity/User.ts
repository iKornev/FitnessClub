import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany} from "typeorm";
import { Program } from "./Program";
import {Role} from "./Role";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Role, role => role.user)
    role: Role  // Role[]

    @Column({default: 0.0 })
    userName: string;

    @Column({default: 0.0 })
    email: string;

    @Column({default: 0.0 })
    password: string;

    @Column({default: 0.0 })
    age: number;
 
    // @CreateDateColumn();
    // createdAt: string;

    @ManyToMany(() => Program, program => program.users)
    programs: Program[];

}
