import React from "react";
import './Footer.css';

export default function Footer(){
    return(
        <div>
            <footer>
                <div id="div_conteudo_footer_principal">
                    <div class="div_logo_rodape">
                        <h1 id="logo_site">LOGO BRABA</h1>
                    </div>
                    <div class="div_contatos">
                        <label>
                            para mais informações disque: 
                        </label>
                        <label>
                            11 9999-9999    
                        </label>
                    </div>
                </div>
                <div>
                    <p>
                        Site feito para uma empresa de rastreamento veicular, mais informações entre em contato
                    </p>
                </div>
            </footer>
        </div>
    )
}