import React from "react";
import Footer from "../../components/Footer/Footer";
import CaixaAssistencia from "../../components/CaixaAssistencia/CaixaAssistencia";
import Header from "../../components/Header/Header";
import "./PaginaPrincipal.css";

//FOTOS DO MEIO DO SITE
import foto_seção from '../../img/Fotos_PaginaPrincipal/foto_homem_no_carro.jpeg';

//AREA DOS ICONES DA PAGINA
import icone_Rastreamentoveicular from '../../img/pasta_icones_assistencias_reylink/satelite.png';
import icone_assistencia24h from '../../img/pasta_icones_assistencias_reylink/assistencia.png';
import icone_rouboefurto from '../../img/pasta_icones_assistencias_reylink/icone_roubo.png';
import icone_colisaodeterceiros from '../../img/pasta_icones_assistencias_reylink/icone_colisão.png'
import icone_guincho from '../../img/pasta_icones_assistencias_reylink/guincho.png';
import icone_motoecarro from'../../img/pasta_icones_assistencias_reylink/motoecarro.png';
import icone_app from'../../img/pasta_icones_assistencias_reylink/app.png';
import icone_todoobrasil from'../../img/pasta_icones_assistencias_reylink/todoobrasil.png';
import icone_taxi from '../../img/pasta_icones_assistencias_reylink/taxi.png';
import icone_vidros from '../../img/pasta_icones_assistencias_reylink/vrido.png';
import icone_pneu from '../../img/pasta_icones_assistencias_reylink/pneu.png';
import icone_chave from '../../img/pasta_icones_assistencias_reylink/chaves.png';
import icone_carroparado from  '../../img/pasta_icones_assistencias_reylink/carrobatido.png';
import icone_paneseca from '../../img/pasta_icones_assistencias_reylink/paneseca.png';
import icone_paneeletrica from '../../img/pasta_icones_assistencias_reylink/paneeletrica.png';

export default function PaginaPrincipal(){
    return(
        <div id="div_geralfds">
            <Header></Header>
            <section id="seção1">
            <div id="div_seção1">
                <div id="div_inputs_e_textos">
                    <div id="div_texto_seção1">
                        <div>
                            <h1 id="h1_caixa_principal">Proteção automotiva</h1>
                            <h1 id="h1_caixa_principal">com rastreamento e recuperação veicular</h1>
                            <h1 id="h1_caixa_principal">A ...    indeniza em caso de roubo*.</h1>
                        </div>
                        <div id="letras_miudas">
                            <label>*Conforme o contrato</label>
                        </div>
                    </div>
                    <div id="div_inputs_seção1">      
                        <h1 id="h1_div_inputs"> Proteja seu veículo, faça uma cotação</h1>
                        <br />
                           <form action="COLOCAR O URL DA API AQUI" method="POST" >
                                <label id="label_div_inputs">Nome</label>
                                <input type="text"/>
                                <br />
                                <br />
                                <label id="label_div_inputs">Email</label>
                                <input type="email"/>
                                <br />
                                <br />
                                <label id="label_div_inputs">Telefone</label>
                                <input type="text"/>
                                <br />
                                <br />  
                                <div id="botão_secão1">
                                    <button>Enviar</button>
                                </div>
                           </form>
                    </div>
                </div>
            </div>
        </section>

        <section class="seção2">
            <div class="div_secão2">
                <h1>Proteção Automotiva para carro, moto, van e utilitário</h1>
                <img src={foto_seção} alt="." id="imagem_seçao2"/>
            </div>
        </section>

        <section className="seção3">
            <div className="div_texto_seção3">
                <h1>A ... indeniza 100% em caso de roubo e furto</h1>
                <p>A Proteção Automotiva Mais avançada do Brasil traz consigo o que há de mais eficiente para a proteção do seu veículo contra roubo ou furto.
                Contrate os nossos serviços e conte com a certeza de que o seu patrimônio está rigorosamente bem protegido.</p>
            </div>
        </section>

        <section class="seção4">
            <div class="div_seção4">
                <h1>Veja como funciona a proteção automotiva da ...</h1>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/AYuiXSvRIFQ?si=7IEhDPaiqCQ9g4Tt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </section>


        <section class="seção5">
            <div class="div_seção5">
                <div className="div_caixa_texto_seção5">
                    <h1 id="h1_caixa_div_assistencia"> Onde seu carro vai, a ... é segurança para você.</h1>
                    <h1 id="h1_caixa_div_assistencia"> Proteção em todo o terriório nacional:</h1>
                </div>
                <div class="caixa_assistencias_geral">
                    <CaixaAssistencia foto={icone_Rastreamentoveicular} label="Rastreamento veicular"></CaixaAssistencia>
                    <CaixaAssistencia foto={icone_assistencia24h} label="Assistencia 24h"></CaixaAssistencia>
                    <CaixaAssistencia foto={icone_rouboefurto} label='Roubo e furto'></CaixaAssistencia>
                    <CaixaAssistencia foto={icone_colisaodeterceiros} label="Colisão de terceiros"></CaixaAssistencia>
                    <CaixaAssistencia foto={icone_guincho} label="Guincho"></CaixaAssistencia>
                    <CaixaAssistencia foto={icone_motoecarro} label="Moto e carro"></CaixaAssistencia>
                    <CaixaAssistencia foto={icone_app} label="APP"></CaixaAssistencia>
                    <CaixaAssistencia foto={icone_todoobrasil} label="Todo o Brasil"></CaixaAssistencia>
                    <CaixaAssistencia foto={icone_taxi} label="Taxi ou uber"></CaixaAssistencia>
                    <CaixaAssistencia foto={icone_carroparado} label="Pane mecânica"></CaixaAssistencia>
                    <CaixaAssistencia foto={icone_pneu} label="Pneu furado"></CaixaAssistencia>
                    <CaixaAssistencia foto={icone_paneeletrica} label="Pane elétrica"></CaixaAssistencia>
                    <CaixaAssistencia foto={icone_paneseca} label="Pane seca"></CaixaAssistencia>
                    <CaixaAssistencia foto={icone_vidros} label="Cobertura de vidros"></CaixaAssistencia>
                    <CaixaAssistencia foto={icone_chave} label="Chaveiro"></CaixaAssistencia>
                </div>
            </div>
        </section>

        <section class="seção6">
            
            <div class="div_veiculos_roubados">
               
                <div class="div_carros_roubados">
                    <div class="div_h1_veiculos_roubados">
                        <h1>Carros mais roubados em 2021</h1>
                    </div>
                    <div class="progress">
                        <div class="progress-value1"> 
                            <span class="span_veiculos">VOLKSWAGEN GOL</span>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-value2"> 
                            <span class="span_veiculos">FIAT UNO</span>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-value3"> 
                            <span class="span_veiculos">CHEVROLET ONIX</span>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-value4"> 
                            <span class="span_veiculos">FIAT PALIO</span>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-value5"> 
                            <span class="span_veiculos">CHEVROLET CORSA</span>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-value6"> 
                            <span class="span_veiculos">FORD KA</span>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-value7"> 
                            <span class="span_veiculos">HYUNDAI HB20</span>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-value8"> 
                            <span class="span_veiculos">FIAT MOBI</span>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-value9"> 
                            <span class="span_veiculos">VOLKSWAGEN FOX</span>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-value10"> 
                            <span class="span_veiculos">CHEVROLET PRISMA</span>
                        </div>
                    </div>
                </div>

                <div class="div_motos_roubados">
                    <div class="div_h1_veiculos_roubados">
                        <h1>Motos mais roubadas em 2021</h1>
                    </div>
                    <div class="progress">
                        <div class="progress-value1_moto"> 
                            <span class="span_veiculos">HONDA CG 160</span>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-value2_moto"> 
                            <span class="span_veiculos">HONDA CG 150</span>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-value3_moto"> 
                            <span class="span_veiculos">HONDA CG 125</span>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-value4_moto"> 
                            <span class="span_veiculos">HONDA CBX 250 TWISTER</span>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-value5_moto"> 
                            <span class="span_veiculos">HONDA PCX 160</span>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-value6_moto"> 
                            <span class="span_veiculos">YAMAHA FAZER 250</span>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-value7_moto"> 
                            <span class="span_veiculos">HONDA XRE 300</span>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-value8_moto"> 
                            <span class="span_veiculos">HONDA BIZ</span>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-value9_moto"> 
                            <span class="span_veiculos">HONDA CB 300R</span>
                        </div>
                    </div>

                    <div class="progress">
                        <div class="progress-value10_moto"> 
                            <span class="span_veiculos">HONDA NXR 160 BROS</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section class="seção7">
            <div class="div_nossos_clientes">
                <h1>Nossos clientes pelo Brasil</h1>
                <div class="caixa_infos_clientes">
                    <div class="caixa_infos_clientes1">
                        <label>+50mil</label>
                        <p id="p_caixa_infos_clientes1">clientes satísfeitos</p>
                    </div>
                    <div class="caixa_infos_clientes1">
                        <label>+5000</label>
                        <p id="p_caixa_infos_clientes1">veiculos recuperados</p>
                    </div>
                </div>
            </div>
        </section>

        <Footer></Footer>
        </div>
    )
}



/*
▒▒▒▒▒▒▒█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
▒▒▒▒▒▒▒█░▒▒▒▒▒▒▒▓▒▒▓▒▒▒▒▒▒▒░█
▒▒▒▒▒▒▒█░▒▒▓▒▒▒▒▒▒▒▒▒▄▄▒▓▒▒░█░▄▄
▒▒▄▀▀▄▄█░▒▒▒▒▒▒▓▒▒▒▒█░░▀▄▄▄▄▄▀░░█
▒▒█░░░░█░▒▒▒▒▒▒▒▒▒▒▒█░░░░░░░░░░░█
▒▒▒▀▀▄▄█░▒▒▒▒▓▒▒▒▓▒█░░░█▒░░░░█▒░░█
▒▒▒▒▒▒▒█░▒▓▒▒▒▒▓▒▒▒█░░░░░░░▀░░░░░█
▒▒▒▒▒▄▄█░▒▒▒▓▒▒▒▒▒▒▒█░░█▄▄█▄▄█░░█
▒▒▒▒█░░░█▄▄▄▄▄▄▄▄▄▄█░█▄▄▄▄▄▄▄▄▄█
▒▒▒▒█▄▄█░░█▄▄█░░░░░░█▄▄█░░█▄▄█
*/