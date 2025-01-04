//HOC - кастомна обгортка для роботи з location

import React from 'react';
import {useLocation, Navigate} from "react-router-dom";

export const RequireAuth = (props: any)=> {
    const {children} = props
    const location = useLocation()
    const auth = false

    if (!auth) {
        // перехід на логінізіацію
        return <Navigate to={'/login'} state={{from: location}}/>
    }
    return children
};

