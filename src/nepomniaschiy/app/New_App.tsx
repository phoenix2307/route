import React from "react";
import '../../App.css'
import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router-dom";
import {PageOne} from "../pages/PageOne";
import {PageTwo} from "../pages/PageTwo";
import {Error404} from "../pages/Error404";
import {PageThree} from "../pages/PageThree";
import {Layout} from "../components/Layout";
import {blogLoader, Posts} from "../pages/Posts";
import {postLoader, SinglePage} from "../pages/SinglePage";
import {CreatePost} from "../pages/CreatePost";
import {EditPost} from "../pages/EditPost";
import {Home} from "../pages/Home";
import {About} from "../pages/About";
import {LoginPage} from "../pages/LoginPage";
import {RequireAuth} from "../hoc/RequireAuth";
import {AuthProvider} from "../hoc/AuthProvider";
import {ErrorPage} from "../pages/ErrorPage";

/*export const PATH = {
    HOME: '/',
    ABOUT: 'about',
    LOGIN: 'login',
    PATH1: 'page1',
    PATH2: 'page2',
    PATH3: 'page3',
    POSTS: 'posts',
    POSTS_PARAMS: 'posts/:id',
    NEW_POST: 'posts/new',
    EDIT_POST: 'posts/:id/edit',
    ERROR: '*',
} as const*/

const router = createBrowserRouter(createRoutesFromElements(
    <Route path={'/'} element={<Layout/>}>

        <Route index element={<Home/>}/>
        <Route path={'about'} element={<About/>}>
            <Route path={'contacts'} element={<p>Our contacts</p>}/>
            <Route path={'team'} element={<p>Our team</p>}/>
        </Route>
        <Route path={'about-us'} element={<Navigate to={'about'}/>}/>
        <Route path={'posts'} element={<Posts/>} loader={blogLoader} errorElement={<ErrorPage/>}/>
        <Route path={'posts/:id'} element={<SinglePage/>} loader={postLoader}/>
        <Route path={'posts/new'}
               element={<RequireAuth> <CreatePost/> </RequireAuth>}
        />
        <Route path={'posts/:id/edit'} element={<EditPost/>}/>
        <Route path={'login'} element={<LoginPage/>}/>
        {/*===================================================*/}
        <Route path={'page1'} element={<PageOne/>}/>
        <Route path={'page2'} element={<PageTwo/>}/>
        <Route path={'page3'} element={<PageThree/>}/>
        <Route path={'*'} element={<Error404/>}/>

    </Route>
))

export const New_App = () => {
    return (
        <div className={'./App'}>
            <AuthProvider>
                <RouterProvider router={router}/>
            </AuthProvider>

        </div>
    );
}