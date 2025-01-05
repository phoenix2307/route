import {Await, defer, Link, useLoaderData, useSearchParams} from "react-router-dom";
import {BlogFilter} from "../components/BlogFilter";
import {Suspense} from "react";

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export const Posts = () => {
    const {posts}: any = useLoaderData()
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
                to={'new'}
                style={{color: 'cadetblue'}}>
                Add new post
            </Link>
            <Suspense fallback={<h2>Loading...</h2>}>
                {/*Принцип роботи Await: Показуй все, що за межами Suspense, а всередині Await покажеж тільки після того як завантажиться те, що ми чекаємо в resolve={posts} */}
                <Await resolve={posts}>
                    {
                        (resolvedPosts) => (<>
                            {
                                resolvedPosts.filter((post: Post) => (
                                    post.title.includes(postQuery)) && post.id >= startsFrom)
                                    .map((post: Post) => (
                                        <Link key={post.id} to={`/posts/${post.id}`}
                                              style={{color: 'white'}}>
                                            <h5>{`${post.id}.  ${post.title}`}</h5>
                                        </Link>))
                            }
                        </>)
                    }
                </Await>
            </Suspense>


        </div>
    )
}

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    // if(!res.ok) {
    //     throw new Response('', {status: res.status, statusText: 'Not founD'})
    // }

    return res.json()
}

export const blogLoader = async () => {
    return defer({
        posts: getPosts()
    })
}

