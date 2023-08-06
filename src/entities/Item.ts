import {Entity,ManyToOne,BaseEntity,Column,PrimaryGeneratedColumn,CreateDateColumn} from 'typeorm'
import { Category } from './Category'

@Entity()
export class Item extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    image: string

    @Column()
    name: string

    @Column('text')
    description: string

    @Column('real')
    price: number   

    @ManyToOne(() => Category, (category) => category.items)
    category: Category

    @CreateDateColumn()
    createdAt: Date
}