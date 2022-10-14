import React from 'react';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home/Home";
import Persons from "./pages/Persons/Persons";
import Nav from "./components/Nav/Nav";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Home />} />
                    <Route path="main" element={<Persons />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
};

export default App;