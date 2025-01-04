//HOC - кастомна обгортка для роботи з location

import React from 'react';
import {useLocation, Navigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth";

export const RequireAuth = (props: any)=> {
    const {children} = props
    const location = useLocation()
    const {user} = useAuth()

    if (!user) {
        // перехід на логінізіацію
        return <Navigate to={'/login'} state={{from: location}}/>
    }
    return children
};

