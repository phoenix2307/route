import {Link, useLoaderData, useNavigate} from "react-router-dom";

export const SinglePage = () => {

    const {post, id}: any = useLoaderData()
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <div>
            <button onClick={goBack}>Go back</button>
                <>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`} style={{color: 'cadetblue'}}>Edit post</Link>
                </>
        </div>
    )
}

export const postLoader = async ({params}: any) => {
    const id = params.id
    const res = await  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()

    return {post, id}
}
