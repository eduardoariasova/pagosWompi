import React, { useEffect } from "react";
import {Routes, Route, Outlet, useLocation } from 'react-router-dom';
// Headers
import HeaderGlobal from "./partials/headerGlobal";
import FooterGlobal from "./partials/footerGlobal";
// paginas GLOGAL
import Home from "./paginas/home";
import Retorno from "./paginas/retorno";




function Direccionamiento(){

   

    /* Outleet se modifica con respecto a la ruta, añadiendo paga y graba en solo global */
    function PlantillaGlobal() {
        return (
            <div>
                <HeaderGlobal />
                    <Outlet />
                <FooterGlobal />
            </div>
        )
    }

    

    
    return (
        // Web Global
        <Routes>
            {/* Rutas Global */}
            <Route path="/" element={<PlantillaGlobal />}>
                <Route index element={<Home />}/>
                <Route path="/retorno-wompi" element={<Retorno />}/>
            </Route>
        </Routes>
    );   
}


export default Direccionamiento;