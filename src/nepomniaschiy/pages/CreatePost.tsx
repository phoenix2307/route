import {useNavigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth";

export const CreatePost = () => {
    const {signOut} = useAuth()

    const navigate = useNavigate()
    const handleSignOut = () => {
        signOut(() => navigate('/', {replace: true}))
    }
    return (
        <div>
            <h2>Create a new post</h2>
            <button onClick={handleSignOut}>Log out</button>
        </div>
    )
}