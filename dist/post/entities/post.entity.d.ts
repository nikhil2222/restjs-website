import { User } from "src/auth/entities/user.entity";
import { Category } from "../../category/entities/category.entity";
export declare class Post {
    id: number;
    title: string;
    content: string;
    slug: string;
    createdOn: Date;
    modifiedOn: Date;
    userId: number;
    categoryId: number;
    user: User;
    category: Category;
    slugifyPost(): void;
}
