import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Task1 from "./tasks/task_1";
import TipCalculator from "./tasks/TipCalculator";
import Timer from "./tasks/Timer";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/task1" element={<Task1 />} />
                <Route path="/tip-calculator" element={<TipCalculator />} />
                <Route path="/timer" element={<Timer />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
