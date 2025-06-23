import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
//import { HashRouter as Router } from "react-router-dom";



createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);


/*ReactDOM.render(
    <StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </StrictMode>,
    document.getElementById('root')
);*/

