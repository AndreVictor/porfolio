import { Routes, Route } from "react-router-dom";
import React, {useState} from "react";

import Lista from "./components/main/Lista";
import Galeria from "./components/main/Galeria";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";

export default function Rotas() {
    return (
        <main>
            <Header/>

            <Routes>
                <Route path="/" element={<Lista />} />
                <Route path="galeria" element={<Galeria />} />
            </Routes>

            <Footer />
        </main>
  );
}