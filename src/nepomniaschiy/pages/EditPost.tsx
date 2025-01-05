import {useActionData, useLoaderData, useNavigation, useParams} from "react-router-dom";
import {UpdatePost} from "../components/UpdatePost";

export const EditPost = () => {
    // const {id} = useParams()
    const data:any = useActionData()
    const {post, id}: any = useLoaderData()
    const navigation = useNavigation()
    return (
        <div>
            {data?.message && <div style={{color: 'lightblue'}}>{data.message}</div>}
            <h2>Edit post {id}</h2>
            <UpdatePost {...post} submitting={navigation.state === 'submitting'}/>
        </div>
    )
}

const updatePost = async (post: any) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.get('id')}`, {
        method: 'PUT',
        body: post
    })
    return res.json()
}

export const updatePostAction = async ({request}:any) => {
    const formData = await request.formData()
    if(!formData.get('title') || !formData.get('body')){
        return {message: `Fields 'Title' and 'Body' are required!!!`}
    }
    const updatedPost = await updatePost(formData)

    return {message: `Post ${updatedPost.id} was successfully updated`}
}