import styles from "./components/Site.module.css";
import {NavWrapper} from "./components/pages/_styles";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Error404} from "./components/pages/Error404";
import React from "react";

const PATH = {
    PATH1: '/page1',
    PATH2: '/page2',
    PATH3: '/page3',
    ERROR: '/error404',
} as const

export const _App = () => {

    return (
        <div className={'./App'}>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    navigation

                    <NavWrapper>
                        <NavLink to={PATH.PATH1}>ADIDAS</NavLink>
                        <NavLink to={PATH.PATH2}>PUMA</NavLink>
                        <NavLink to={PATH.PATH3}>Abibas</NavLink>
                    </NavWrapper>

                    {/* <NavLink to={'/page1'}
                             className={({isActive}) =>
                                 isActive ? styles.activeNavLink : styles.navLink}
                    > ADIDAS </NavLink>
                    <NavLink to={'/page2'}
                             className={({isActive}) =>
                                 isActive ? styles.activeNavLink : styles.navLink}
                    > PUMA </NavLink>
                    <NavLink to={'/page3'}
                             className={({isActive}) =>
                                 isActive ? styles.activeNavLink : styles.navLink}
                    > Abibas </NavLink>*/}

                </div>
                <div className={styles.content}>
                        <Routes>

                            <Route path={'/'} element={<PageOne/>}></Route>

                            <Route path={PATH.PATH1} element={<PageOne/>}></Route>
                            <Route path={PATH.PATH2} element={<PageTwo/>}></Route>
                            <Route path={PATH.PATH3} element={<PageThree/>}></Route>
                            <Route path={PATH.ERROR} element={<Error404/>}></Route>

                            <Route path={'*'} element={<Navigate to={PATH.ERROR}/>}></Route>


                        </Routes>
                </div>
            </div>
            <div className={styles.footer}> abibas 2023</div>
        </div>
    );

}