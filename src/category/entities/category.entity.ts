import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "../../post/entities/post.entity";

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  title:string;

  @Column()
  description:string;

  @OneToMany(()=> Post, (post)=>post.category)
  post: Post[];
}
