import {Entity,BaseEntity,OneToMany,Column,PrimaryGeneratedColumn,CreateDateColumn} from 'typeorm'
import { Category } from './Category'

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    email: string

    @Column()
    password: string

    @OneToMany(() => Category, (category) => category.user)
    categories: Category[]

    @CreateDateColumn()
    createdAt: Date
}