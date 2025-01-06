import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import styles from "./components/Site.module.css";
import {S} from './components/pages/_styles';
import {Model} from "./components/pages/Model";
import {Prices} from "./components/pages/Prices";


export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    MODEL: '/model',
    PRICES: '/prices'
} as const;

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                {/*=====================  Navigation  ===========================*/}
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ABIBAS}>Abibas</NavLink></S.NavWrapper>
                    <hr style={{border: '0px'}}/>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>Prices for dealers</NavLink></S.NavWrapper>
                </div>
                {/*=====================  Routes  ===============================*/}
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/adidas'}/>}/>

                        <Route path={PATH.ADIDAS} element={<Adidas/>}/>
                        <Route path={PATH.PUMA} element={<Puma/>}/>
                        <Route path={PATH.ABIBAS} element={<Abibas/>}/>
                        <Route path={'/:company/:id'} element={<Model/>}/>
                        <Route path={PATH.PRICES} element={<Prices/>}/>

                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;

