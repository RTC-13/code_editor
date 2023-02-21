import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import {PythonProvider} from "react-py"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PythonProvider>
        <App />
    </PythonProvider>
);

