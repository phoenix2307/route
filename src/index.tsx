import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {New_App} from "./nepomniaschiy/app/New_App";

/*const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        {/!*<App/>*!/}
        {/!*<_App/>*!/}
        <New_App/>
    </BrowserRouter>
);*/


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <New_App/>
);


reportWebVitals();
