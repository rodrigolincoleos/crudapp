import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../css/Body.css';

import Header from './Header';
import Footer from './Footer';
import Side_menu from "./Side_menu";
import Antecedentes_Personales from "./Antecedentes_Personales";
import Antecedentes_propiedad from "./Antecedentes_propiedad";
import Antecedentes_Ahorro from "./Antecedentes_ahorro";
import Antecedentes_Conyuge from "./Antecedente_conyuge";
import Mostrar_Persona from "./mostrar_persona";
import Crear_Proyectos from "./Crear_proyecto";

function Router() {


    return (
        <BrowserRouter>
            <Header />
            <div id='body'>
                 <Side_menu />
                <Routes basename={process.env.PUBLIC_URL} >
                   
                    <Route exact path='/antecedentes_persona' element={<Antecedentes_Personales />} />
                    <Route exact path='/antecedentes_propiedad' element={<Antecedentes_propiedad />} />
                    <Route exact path='/antecedentes_conyuge' element={<Antecedentes_Conyuge />} />
                    <Route exact path='/antecedentes_ahorro' element={<Antecedentes_Ahorro />} />
                    <Route exact path='/mostrar_persona' element={<Mostrar_Persona />} />
                    <Route exact path='/crear_proyecto' element={<Crear_Proyectos />} />

                </Routes>
            </div>

            <Footer />
        </BrowserRouter>


    );
}
export default Router