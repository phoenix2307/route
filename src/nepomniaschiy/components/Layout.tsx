// Розмітка всього макету
// Тут можна розбити на блоки всю сторінку, а потім розмістити комопнент <Outlet/>
// в потрібному місці макету
//В цьому компоненті будуть знаходитись всі наші <Route/>
//Підключається <Layout> в App як кореневий парний <Route>, куди поміщаються
//усі дочірні роути, вони є цим <Outlet/>

import {Outlet} from "react-router-dom";
import styles from "../../components/Site.module.css";
import React from "react";
import {CustomLink} from "./CustomLink";

export const Layout = () => {

    return (
        <div className={styles.layout}>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>

                <div className={styles.nav}>


                    <div className={styles.testDiv}>
                        <CustomLink to={'/'}>Home</CustomLink>
                        <CustomLink to={'about'}>About</CustomLink>
                        <CustomLink to={'posts'}>Blog</CustomLink>
                        <hr/>
                        <CustomLink to={'page1'}>Adidas</CustomLink>
                        <CustomLink to={'page2'}>Puma</CustomLink>
                        <CustomLink to={'page3'}>Abi - bas</CustomLink>
                    </div>
                </div>

                <div className={styles.content}>

                    <Outlet/>
                </div>
            </div>
            <div className={styles.footer}> React RouterDom 2024</div>
        </div>
    )
}