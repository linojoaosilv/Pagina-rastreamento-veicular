import React from "react";
import './CaixaAssistencia.css'

export default function CaixaAssistencia({label,foto}){
    return(
        <div>
            <div class="caixa_assistencia">
                <img src={foto} alt="" id="icone_assistencia_caixa"/>
                <label id="label_caixa_assistencia">{label}</label>
            </div>
        </div>
    )
}