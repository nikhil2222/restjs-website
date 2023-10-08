import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from "./entities/post.entity";
import { Repository } from "typeorm";
export declare class PostService {
    private readonly repo;
    constructor(repo: Repository<Post>);
    create(createPostDto: CreatePostDto): string;
    findAll(): Promise<Post[]>;
    findOne(id: number): string;
    update(id: number, updatePostDto: UpdatePostDto): string;
    remove(id: number): string;
}
