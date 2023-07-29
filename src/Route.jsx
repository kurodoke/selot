import React from "react";
import App from "./App";
import { Route, Router, BrowserRouter, Routes } from "react-router-dom";
import Test from "./page/__test__/index";

export default function RouteC() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<App />}></Route>
                {/* <Route path='/test' element={<Test />}></Route> */}
            </Routes>
        </BrowserRouter>
    );
}
