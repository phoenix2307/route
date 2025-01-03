import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {PATH} from "../app/New_App";

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h3>POSTS</h3>
            <Link to={PATH.NEW_POST} style={{color: 'cadetblue'}}>Add new post</Link>
            {posts.length > 0
                ? posts.map(post => {
                    return (
                        <>
                            <Link key={post.id} to={`/posts/${post.id}`}
                                  style={{color: 'white'}}>
                                <h4>{post.title}</h4>
                            </Link>
                        </>
                    )
                })
                : (
                    <p>No posts</p>
                )
            }

        </div>
    )
}