import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import BlogEntity from './blog.entity';
import { v4 } from 'uuid';

@ObjectType()
@Entity('categories')
export default class CategoryEntity extends BaseEntity {
    @Field(() => ID)
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    slug: string;

    @Field((type) => [BlogEntity!]!)
    blogs: BlogEntity[];

    @CreateDateColumn({ type: 'timestamp' })
    @Field(() => Date)
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    @Field(() => Date)
    updatedAt: Date;

    @BeforeInsert()
    addId() {
        this.id = v4();
    }
}