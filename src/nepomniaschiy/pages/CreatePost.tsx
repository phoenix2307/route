import {redirect, useNavigate, useNavigation} from "react-router-dom";
import {useAuth} from "../hook/useAuth";
import {NewPost} from "../components/NewPost";

export const CreatePost = () => {
    const {signOut} = useAuth()
    const navigate = useNavigate()
    const navigation = useNavigation()

    const handleSignOut = () => {
        signOut(() => navigate('/', {replace: true}))
    }
    return (
        <div>
            <h2>Create a new post</h2>
            <NewPost submitting={navigation.state === 'submitting'}/>
            <button onClick={handleSignOut}>Log out</button>
        </div>
    )
}

const createPost = async ({title, body, userId}: any) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, body, userId})
    })
    const newPost = await res.json()

    return newPost
}

export const createPostAction = async ({request}: any) => {
    const formData = await request.formData()
    const newPost = {
        title: formData.get('title'),
        body: formData.get('body'),
        userId: formData.get('userId')
    }
    const post = await createPost(newPost)
    return redirect('/posts/' + post.id)
}