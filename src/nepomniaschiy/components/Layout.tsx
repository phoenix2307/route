// Розмітка всього макету
// Тут можна розбити на блоки всю сторінку, а потім розмістити комопнент <Outlet/>
// в потрібному місці макету
//В цьому компоненті будуть знаходитись всі наші <Route/>
//Підключається <Layout> в App як кореневий парний <Route>, куди поміщаються
//усі дочірні роути, вони є цим <Outlet/>

import {Link, Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <header>
                <Link to={'/'}>Home</Link>
                <Link to={'/'}>Page1</Link>
                <Link to={'/'}>Page2</Link>
                <Link to={'/'}>Page3</Link>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                2025
            </footer>
        </>
    )
}