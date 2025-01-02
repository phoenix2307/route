import React from "react";
import '../../App.css'
import {Route, Routes} from "react-router-dom";
import {PageOne} from "../pages/PageOne";
import {PageTwo} from "../pages/PageTwo";
import {Error404} from "../pages/Error404";
import {PageThree} from "../pages/PageThree";
import {Layout} from "../components/Layout";
import {Posts} from "../pages/Posts";
import {SinglePage} from "../pages/SinglePage";

export const PATH = {
    HOME: '/',
    PATH1: '/page1',
    PATH2: '/page2',
    PATH3: '/page3',
    POSTS: '/posts',
    POSTS_PARAMS: '/posts/:id',
    ERROR: '*',
} as const

export const New_App = () => {
    return (
        <div className={'./App'}>
            <Routes>
                <Route path={PATH.HOME} element={<Layout/>}>

                    <Route path={PATH.POSTS} element={<Posts/>}/>
                    <Route path={PATH.POSTS_PARAMS} element={<SinglePage/>}/>
                    <Route path={PATH.PATH1} element={<PageOne/>}/>
                    <Route path={PATH.PATH2} element={<PageTwo/>}/>
                    <Route path={PATH.PATH3} element={<PageThree/>}/>
                    <Route path={PATH.ERROR} element={<Error404/>}/>
                </Route>
            </Routes>
        </div>
    );
}