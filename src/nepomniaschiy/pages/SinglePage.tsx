import {Link, useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Post} from "./Posts";
import {PATH} from "../app/New_App";

export const SinglePage = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState<Post | null>(null)
    const goBack = () => navigate(-1)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])


    return (
        <div>
            <button onClick={goBack}>Go back</button>
            {post && (
                <>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`} style={{color: 'cadetblue'}}>Edit post</Link>

                </>
            )}

        </div>
    )
}