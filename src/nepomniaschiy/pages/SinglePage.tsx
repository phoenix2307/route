import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Post} from "./Posts";
import {PATH} from "../app/New_App";

export const SinglePage = () => {
    const {id} = useParams()
    const [post, setPost] = useState<Post | null>(null)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    return (
        <div>
            {post && (
                <>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`}>Edit post</Link>

                </>
            )}

        </div>
    )
}