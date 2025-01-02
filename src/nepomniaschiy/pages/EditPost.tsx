import {useParams} from "react-router-dom";

export const EditPost = () => {
    const {id} = useParams()
    return (
        <div>
            <h2>Edit post {id}</h2>
        </div>
    )
}