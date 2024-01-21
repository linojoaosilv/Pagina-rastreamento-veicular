import React from "react";
import './Header.css';

export default function Header(){

    function Paginaindisponivel(){
        alert("pagina indisponivel por enquanto :/")
    }

    return(
        <div>
            <header class="header_site">
            <div id="div_header_geral">
                <div className="div_header">
                    <nav role="navigation">
                        <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <li>
                                <a href="." onClick={Paginaindisponivel} id="div-link">Simule agora mesmo</a>
                            </li>
                            <li>
                                <a href="." onClick={Paginaindisponivel} id="div-link">Institucioanal</a>
                            </li>   
                            <li>
                                <a href="." onClick={Paginaindisponivel}  id="div-link">Mídia</a>
                            </li>
                            <li>
                                <a href="." onClick={Paginaindisponivel} id="div-link">Blog</a>
                            </li>
                            <li>
                                <a href="." onClick={Paginaindisponivel} id="div-link">Trabalhe conosco</a>
                            </li>
                            <li>
                                <a href="." onClick={Paginaindisponivel} id="div-link">contato</a>
                            </li>
                            <li>
                                <a href="." onClick={Paginaindisponivel} id="div-link">Fale com um consultor</a>
                            </li>
                        </ul>
                        </div>
                    </nav>
                <div class="div_logo">
                    <a href=".">
                        {/* <img src={logosite} alt="logo_site" id="logo_site"/> */}
                        <h1 id="logo_site">LOGO</h1>
                    </a>
                </div>
            </div>
            
            </div>
            <div className="div_area_benificiario">
                <a href="."  onClick={Paginaindisponivel} >Área do beneficiario</a>
            </div>
        </header>
        </div>
    )
}

























/* 
░░░░░░░░░░░░░░░░░░░░░░█████████░░░░░░░░░
░░███████░░░░░░░░░░███▒▒▒▒▒▒▒▒███░░░░░░░
░░█▒▒▒▒▒▒█░░░░░░░███▒▒▒▒▒▒▒▒▒▒▒▒▒███░░░░
░░░█▒▒▒▒▒▒█░░░░██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██░░
░░░░█▒▒▒▒▒█░░░██▒▒▒▒▒██▒▒▒▒▒▒██▒▒▒▒▒███░
░░░░░█▒▒▒█░░░█▒▒▒▒▒▒████▒▒▒▒████▒▒▒▒▒▒██
░░░█████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
░░░█▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒██
░██▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒██▒▒▒▒▒▒▒▒▒▒██▒▒▒▒██
██▒▒▒███████████▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒██
█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒████████▒▒▒▒▒▒▒██
██▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██░
░█▒▒▒███████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██░░░
░██▒▒▒▒▒▒▒▒▒▒████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█░░░░░
░░████████████░░░█████████████████░░░░░░
*/
