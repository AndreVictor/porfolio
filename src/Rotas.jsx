import { Routes, Route } from "react-router-dom";
import React, {useState} from "react";

import Body from "./components/main/Body";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";

export default function Rotas() {
    const [menu, setMenu] = useState('lista');

    function handleMenu(event) {
        const {value} = event.target;
        return setMenu(value);
    }

    return (
        <main>
            <Header
            menu={menu}
            change={handleMenu}
            />

            <Routes>
                <Route path="/" element={<Body />} />
            </Routes>

            <Footer />
        </main>
  );
}