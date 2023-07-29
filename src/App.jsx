import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/navbar/navbar";
import Header from "./page/header/header";
import Content from "./page/content/content";
// import Slot from "./page/slot/slot";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar></Navbar>
            <Header></Header>
            <Content></Content>
            {/* <Slot></Slot> */}
        </>
    );
}

export default App;
