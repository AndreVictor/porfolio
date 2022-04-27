import { Routes, Route } from "react-router-dom";
import React, {useState} from "react";

import Lista from "./components/main/Lista";
import Galeria from "./components/main/Galeria";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";

import imgDatatest from './imgDatatest';
import Detalhe from "./components/main/Detalhe";

export default function Rotas() {

    const detalheUrl = imgDatatest.data.memes[0].name.replaceAll(' ', '-');
    
    return (
        <main>
            <Header/>

            <Routes>
                <Route exact path="/" element={<Lista />} />
                <Route path="/galeria" element={<Galeria />} />
                <Route path={`/${detalheUrl}`} element={<Detalhe/>} />
            </Routes>

            <Footer />
        </main>
  );
}