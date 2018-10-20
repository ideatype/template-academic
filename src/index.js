import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import AppLayout from "./AppLayout";
import registerServiceWorker from './registerServiceWorker';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <div>
        <BrowserRouter>  
            <AppLayout />
        </BrowserRouter>
    </div>,
            document.getElementById("root")
        );
        registerServiceWorker();
