import {
    BaseEntity,
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    ManyToMany,
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { v4 } from 'uuid';
import BlogEntity from './blog.entity';

@ObjectType()
@Entity('tags')
export default class TagEntity extends BaseEntity {
    @Field(() => ID)
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    slug: string;

    @ManyToMany((type) => BlogEntity, (blog) => blog.tags)
    @Field(() => [BlogEntity!]!)
    blogs: BlogEntity[];

    @CreateDateColumn({ type: 'timestamp' })
    @Field(() => Date)
    createdAt: Date;

    @BeforeInsert()
    addId() {
        this.id = v4();
    }
}
