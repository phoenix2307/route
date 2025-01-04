import {Link, useLoaderData, useSearchParams} from "react-router-dom";
import {PATH} from "../app/New_App";
import {BlogFilter} from "../components/BlogFilter";

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export const Posts = () => {
    const posts: any = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()

    const postQuery = searchParams.get('post') || '' // дає всі сторінки, де в адресі є post запит
    const latest = searchParams.has('latest') // boolean

    const startsFrom = latest ? 90 : 1 //post id

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
                    .filter((post: Post) => (post.title.includes(postQuery)) && post.id >= startsFrom)
                    .map((post: Post) => {
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

 export const blogLoader = async ({request, params}: any) => {
    console.log(request, params)
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}

