import {Entity,ManyToOne,OneToMany,BaseEntity,Column,PrimaryGeneratedColumn,CreateDateColumn} from 'typeorm'
import { User } from './User'
import { Item } from './Item'
@Entity()
export class Category extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @OneToMany(() => Item, (item) => item.category)
    items: Item[]


    @ManyToOne(() => User, (user) => user.categories)
    user: User

    @CreateDateColumn()
    createdAt: Date
}