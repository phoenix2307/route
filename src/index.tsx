import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, RouterProvider} from "react-router-dom";
import {router} from "./components/routes/route";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router}/>
);


// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
// root.render(
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>
// );


reportWebVitals();

