import {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {PATH} from "../app/New_App";

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [searchParams, setSearchParams] = useSearchParams()
    const postQuery = searchParams.get('post') || ''

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const form = event.target
        const query = form.search.value

        setSearchParams({post: query})
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h3>POSTS</h3>
            <form autoComplete={'off'} onSubmit={handleSubmit}>
                <input type="search" name={'search'}/>
                <input type="submit" name={'Search'}/>
            </form>

            <Link to={PATH.NEW_POST} style={{color: 'cadetblue'}}>Add new post</Link>
            {posts.length > 0
                ? posts
                    .filter(post => post.title.includes(postQuery))
                    .map(post => {
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