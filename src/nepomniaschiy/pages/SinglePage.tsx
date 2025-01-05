import {Await, Link, useAsyncValue, useLoaderData, useNavigate} from "react-router-dom";
import {Suspense} from "react";

const Post = () => {
    const post: any = useAsyncValue()
    return (<>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </>)
}
const Comments = () => {
    const comments: any = useAsyncValue()
    return (
       <div>
           <h2>Comments</h2>
           {comments.map((comment: any) => (
               <div key={comment.id}>
                   <h3>{comment.email}</h3>
                   <h4>{comment.name}</h4>
                   <p>{comment.body}</p>
               </div>
           ))}
       </div>
    )
}


export const SinglePage = () => {
    const {post, comments, id}: any = useLoaderData()
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <Suspense fallback={<h2>Post is Loading...</h2>}>
                <Await resolve={post}>
                    <Post/>
                </Await>
            </Suspense>
            <Suspense fallback={<h2>Comments is Loading...</h2>}>
                <Await resolve={comments}>
                    <Comments/>
                </Await>
            </Suspense>

            <Link to={`/posts/${id}/edit`} style={{color: 'cadetblue'}}>Edit post</Link>
        </div>
    )
}

async function getPostById(id: any) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json()
}

async function getCommentsByPost(id: any) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

    return res.json()
}


export const postLoader = async ({params}: any) => {
    const id = params.id
    return {post: await getPostById(id), comments: getCommentsByPost(id), id}
}
