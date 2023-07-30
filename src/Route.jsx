import React from "react";
import App from "./App";
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Slot from "./page/slot/slot";
import Navbar from "./components/navbar/navbar";
import ComingSoon from "./page/comingsoon";

export default function RouteC() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<App />}></Route>
                <Route
                    path='/slot/:gameName'
                    element={
                        <>
                            <Slot />
                        </>
                    }
                ></Route>
                <Route
                    path='/deposit'
                    element={
                        <>
                            <Navbar />
                            <ComingSoon />
                        </>
                    }
                ></Route>
                <Route
                    path='/withdraw'
                    element={
                        <>
                            <Navbar />
                            <ComingSoon />
                        </>
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}
