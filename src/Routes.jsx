import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaAreaDoBeneficiario from "./Pages/PaginaAreaDoBeneficiario/PaginaAreaDoBeneficiario";
import PaginaPrincipal from "./Pages/PaginaPrincipal/PaginaPrincipal";


export default function RouterSite(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPrincipal/>}/>
                <Route path="/PaginaAreaDoBeneficiario" element={<PaginaAreaDoBeneficiario/>}/>
            </Routes>
        </BrowserRouter>
    )
}