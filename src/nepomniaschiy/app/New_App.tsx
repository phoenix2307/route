import React from "react";
import styles from "../../components/Site.module.css";
import '../../App.css'
import {Link, Route, Routes} from "react-router-dom";
import {NavWrapper} from "../pages/_styles";
import {PageOne} from "../pages/PageOne";
import {PageTwo} from "../pages/PageTwo";
import {Error404} from "../pages/Error404";
import {PageThree} from "../pages/PageThree";

export const PATH = {
    HOME: '/',
    PATH1: '/page1',
    PATH2: '/page2',
    PATH3: '/page3',
    ERROR: '*',
} as const

export const New_App = () => {
    return (
        <div className={'./App'}>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <NavWrapper>
                        <Link to={PATH.PATH1}>Adidas</Link>
                        <Link to={PATH.PATH2}>Puma</Link>
                        <Link to={PATH.PATH3}>Abi - bas</Link>
                    </NavWrapper>
                </div>

                <div className={styles.content}>
                    <Routes>
                        <Route path={PATH.PATH1} element={<PageOne/>}/>
                        <Route path={PATH.PATH2} element={<PageTwo/>}/>
                        <Route path={PATH.PATH3} element={<PageThree/>}/>
                        <Route path={PATH.ERROR} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}> abibas 2023</div>
        </div>
    );
}