import React from "react";
import '../../App.css'
import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router-dom";
import {PageOne} from "../pages/PageOne";
import {PageTwo} from "../pages/PageTwo";
import {Error404} from "../pages/Error404";
import {PageThree} from "../pages/PageThree";
import {Layout} from "../components/Layout";
import {Posts} from "../pages/Posts";
import {SinglePage} from "../pages/SinglePage";
import {CreatePost} from "../pages/CreatePost";
import {EditPost} from "../pages/EditPost";
import {Home} from "../pages/Home";
import {About} from "../pages/About";
import {LoginPage} from "../pages/LoginPage";
import {RequireAuth} from "../hoc/RequireAuth";
import {AuthProvider} from "../hoc/AuthProvider";

export const PATH = {
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
} as const

const router = createBrowserRouter(createRoutesFromElements(
    <Route path={PATH.HOME} element={<Layout/>}>

        <Route index element={<Home/>}/>
        <Route path={PATH.ABOUT} element={<About/>}>
            <Route path={'contacts'} element={<p>Our contacts</p>}/>
            <Route path={'team'} element={<p>Our team</p>}/>
        </Route>
        <Route path={'about-us'} element={<Navigate to={PATH.ABOUT}/>}/>
        <Route path={PATH.POSTS} element={<Posts/>}/>
        <Route path={PATH.POSTS_PARAMS} element={<SinglePage/>}/>
        <Route path={PATH.NEW_POST}
               element={<RequireAuth> <CreatePost/> </RequireAuth>}
        />
        <Route path={PATH.EDIT_POST} element={<EditPost/>}/>
        <Route path={PATH.LOGIN} element={<LoginPage/>}/>
        {/*===================================================*/}
        <Route path={PATH.PATH1} element={<PageOne/>}/>
        <Route path={PATH.PATH2} element={<PageTwo/>}/>
        <Route path={PATH.PATH3} element={<PageThree/>}/>
        <Route path={PATH.ERROR} element={<Error404/>}/>

    </Route>
))

export const New_App = () => {
    return (
        <div className={'./App'}>
            <AuthProvider>
                {/*                <Routes>
                    <Route path={PATH.HOME} element={<Layout/>}>

                        <Route index element={<Home/>}/>
                        <Route path={PATH.ABOUT} element={<About/>}/>
                        <Route path={'about'} element={<About/>}>
                            <Route path={'contacts'} element={<p>Our contacts</p>}/>
                            <Route path={'team'} element={<p>Our team</p>}/>
                        </Route>
                        <Route path={'/about-us'} element={<Navigate to={PATH.ABOUT}/>}/>
                        <Route path={PATH.POSTS} element={<Posts/>}/>
                        <Route path={PATH.POSTS_PARAMS} element={<SinglePage/>}/>
                        <Route path={PATH.NEW_POST}
                               element={<RequireAuth> <CreatePost/> </RequireAuth>}
                        />
                        <Route path={PATH.EDIT_POST} element={<EditPost/>}/>
                        <Route path={PATH.LOGIN} element={<LoginPage/>}/>
                        ===================================================
                        <Route path={PATH.PATH1} element={<PageOne/>}/>
                        <Route path={PATH.PATH2} element={<PageTwo/>}/>
                        <Route path={PATH.PATH3} element={<PageThree/>}/>
                        <Route path={PATH.ERROR} element={<Error404/>}/>

                    </Route>
                </Routes>*/}

                <RouterProvider router={router}/>
            </AuthProvider>

        </div>
    );
}