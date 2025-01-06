import {ReactNode} from "react";
import {Error404} from "../pages/Error404";
import {Navigate} from "react-router-dom";

type Props = {
    children: ReactNode
}

export const ProtectedRoute = ({children}: Props) => {

    const logged = false

    return (
        <div>{
            logged
                ? children
                : <Navigate to={'/error'}/>
        }</div>
    )
}