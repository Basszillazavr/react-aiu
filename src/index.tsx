import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Solution1 from './cheats/solution_1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Task1 from "./tasks/task_1";
import TipCalculator from "./tasks/TipCalculator";

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
            </Routes>
        </Router>
    </React.StrictMode>
);
