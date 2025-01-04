import {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {PATH} from "../app/New_App";
import {BlogFilter} from "../components/BlogFilter";

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [searchParams, setSearchParams] = useSearchParams()
    const postQuery = searchParams.get('post') || '' // дає всі сторінки, де в адресі є post запит
    const latest = searchParams.has('latest') // boolean

    const startsFrom = latest ? 90 : 1 //post id


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h3>POSTS</h3>
            <BlogFilter postQuery={postQuery}
                        latest={latest}
                        setSearchParams={setSearchParams}/>

            <Link
                to={PATH.NEW_POST}
                style={{color: 'cadetblue'}}>
                Add new post
            </Link>
            {posts.length > 0
                ? posts
                    .filter(post => (post.title.includes(postQuery)) && post.id >= startsFrom)
                    .map(post => {
                        return (
                            <>
                                <Link key={post.id} to={`/posts/${post.id}`}
                                      style={{color: 'white'}}>
                                    <h5>{`${post.id}.  ${post.title}`}</h5>
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