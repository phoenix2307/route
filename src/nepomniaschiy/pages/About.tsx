import {Link, Outlet, Route, Routes} from "react-router-dom";

export const About = () => {
    return (
        <div>
            <h2>About us</h2>
            <p>This is a demo website about React-router-dom library</p>
            <ul>
                <li><Link style={{color: 'white'}} to={'contacts'}>Our contacts</Link></li>
                <li><Link style={{color: 'white'}} to={'team'}>Our Team</Link></li>
            </ul>

            <Outlet/>
        </div>


    )
}