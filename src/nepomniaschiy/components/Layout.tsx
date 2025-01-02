// Розмітка всього макету
// Тут можна розбити на блоки всю сторінку, а потім розмістити комопнент <Outlet/>
// в потрібному місці макету
//В цьому компоненті будуть знаходитись всі наші <Route/>
//Підключається <Layout> в App як кореневий парний <Route>, куди поміщаються
//усі дочірні роути, вони є цим <Outlet/>

import {NavLink, Outlet} from "react-router-dom";
import styles from "../../components/Site.module.css";
import React from "react";
import {PATH} from "../app/New_App";
import {CustomLink} from "./CustomLink";

export const Layout = () => {

    return (
        <>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>


                    <div className={styles.testDiv}>
                        <CustomLink to={PATH.POSTS}>Blog</CustomLink>
                        <CustomLink to={PATH.PATH1}>Adidas</CustomLink>
                        <CustomLink to={PATH.PATH2}>Puma</CustomLink>
                        <CustomLink to={PATH.PATH3}>Abi - bas</CustomLink>
                    </div>
                </div>

                <div className={styles.content}>
                    <Outlet/>
                </div>
            </div>
            <div className={styles.footer}> React RouterDom 2024</div>
        </>
    )
}