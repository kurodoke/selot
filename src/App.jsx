import { useState } from "react";
import "./App.css";

import Navbar from "./components/navbar/navbar";
import Header from "./page/header/header";
import Content from "./page/content/content";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar></Navbar>
            <Header></Header>
            <Content></Content>
        </>
    );
}

export default App;
