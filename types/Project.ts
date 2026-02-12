import { ContentBlock } from "./ContentBlock";

export type Project = {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    coverimage: string;
    excerpt: string;
    content: ContentBlock[];
    progress: string;
    tags: string[];
    highlighted?: boolean;
}