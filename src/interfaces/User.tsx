
export interface User {
    id: number;
    name: string;
    userPosts: Post[]
}

export interface Post {
    id: number,
    title: string,
    body: string
}
