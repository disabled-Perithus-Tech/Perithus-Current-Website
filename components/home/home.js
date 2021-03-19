import React from 'react'
import {Navbar} from './../home/navbar'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faWhatsapp, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'




export const Home = () =>{
    return(
        <div className='Home'>
        <div className='Banner'>
            <div className='imgBanner'>                          
                <img className='logo' src='../logo.png'></img>
                <div className='Navbar'>
                <Navbar/>
                </div>
                
                      
                <p className='textBanner'>CRIE SEU APLICATIVO EM <br/> POUCAS SEMANAS</p>
                <p className='subTextBanner'>ENTREGAMOS SEU APLICATIVO OU PLATAFORMA EM SEMANAS <br/> 
                E ATÉ 10 VEZES MAIS BARATO COM A MÁXIMA QUALIDADE!</p>
                <p className='subTextBanner2'>NÃO PERCA TEMPO!</p>
                <div className='button'><button className='buttonSm'>SAIBA MAIS</button></div>                       
            </div>           
        </div>
        <div className='Grupo1'>
            <div className='imgGrupo1'>           
                <h1 className='textGrupo1'>VANTAGENS</h1>
                <p className='border'></p>
                <p className='subTextGrupo1'>PORQUE DESENVOLVEMOS A MELHOR SOLUÇÃO</p>
            <div className='vantagens'>
            <div className='custo'>
                <div className='imgCusto'>
                    <img className='imgCusto' src='./../imgCusto.png'></img>
                </div>
                <div className='textCusto'>
                    <p className='textCusto'>CUSTO BENEFÍCIO</p>
                </div>
                <div className='caixa1'>
                <div className='subTextCusto'>
                <p>Não perdemos negócio!
                Crie seu<br/> projeto com uma redução de <b>até 10 
                <br/>vezes</b> no custo!</p> 
                </div>
                </div>               
            </div>
            <div className='velocidade'>
                <div className='imgVelocidade'>
                <img className='imgVelocidade' src='./../imgVelocidade.png'></img>
                </div>
                <div className='textVelocidade'>
                    <p className='textVelocidade'>VELOCIDADE</p>
                </div>
                <div className='caixa2'>
                <div className='subTextVelocidade'>
                <p>Nosso time pode construir o 
                <br/> sistema que você precisa <b>em 
                <br/>semanas</b> (ao invés de meses).</p> 
                </div>
                </div>               
            </div>
            <div className='qualidade'>
                <div className='imgQualidade'>
                <img className='imgQualidade' src='./../imgQualidade.png'></img>
                </div>
                <div className='textQualidade'>
                    <p className='textQualidade'>QUALIDADE</p>
                </div>
                <div className='caixa3'>
                <div className='subTextQualidade'>
                Nossa garantia de satisfação cobre 15
                <br/> dias após a entrega do projeto e temos
                <br/> uma das maiores taxas de aprovação do
                <br/> mercado: 98,6% 
                </div>
                </div>               
            </div>
            <div>               
            </div>                         
            </div>                
            </div>           
        </div>
        <div className='consultoria'>
        <h1 className='textConsultoria'>SUA IDEIA,<br/> NOSSA ESPECIALIDADE</h1>
        <p className='borderCons'></p>
        <p className='textBorder'>DESENVOLVEMOS SUA IDEIA COM AGILIDADE, A MELHOR EXPERIÊNCIA E PREÇO IMBATÍVEL</p>
        <div className='ideia'>            
        </div>
        <div className='parceiros'>
            <p className='textParceiros'>NOSSOS PARCEIROS</p>
            <p className='borderParc'></p> <p className='textBorderParc'>A PERITHUS TRABALHA COM</p>
            <div className='imgParc'>
            <img className='imgParc1' src='./../parc1.png'></img>
            <img className='imgParc2' src='./../parc2.png'></img>
            </div>           
        </div>
        </div>
        <div>
            <p className='textDepoimentos'>DEPOIMENTOS</p>
            <p className='borderDepoimentos'></p><p className='textBoderDepoimentos'>O QUE FALAM DA PERITHUS...</p>
            <div className='parentDepoimentos'>
                <p className='Dep1'>
                    <img className='imgDep1' src='./'></img>
                    <p className='textDep1'>"A Perithus Technologies é nossa <br/>
                    parceira de Tecnologia. Confio no<br/>
                    trabalho da equipe! Eles sempre<br/>
                    buscam a excelência.”</p>
                </p>
                <p className='Dep2'>
                    <img className='imgDep2' src='./'></img>
                    <p className='textDep2'>“Eu sempre trabalho com muitos<br/>
                    produtos e variações. A Perithus trouxe<br/>
                    uma otimização das minhas vendas e <br/>
                    dia-a-dia e me permitiu ficar mais<br/>
                    próxima dos meus clientes<br/>
                    com minha loja virtual.”</p>
                </p>
                <p className='Dep3'>
                    <img className='imgDep3' src='./'></img>
                    <p className='textDep3'>A Perithus definitivamente, colocou<br/>
                    nosso barco na água! Rapidamente,<br/>
                    entendeu nosso projeto e cumpriu<br/>
                    com os prazos. Solucionar problemas<br/>
                    de tecnologia faz parte do dia a dia e<br/>
                    fazer isso conforme a necessidade e<br/>
                    condições de cada negócio é<br/>
                    essencial para transformar clientes<br/>
                    em parceiros. Vale apontar<br/>
                    positivamente a organização da<br/>
                    estrutura de trabalho e dos<br/>
                    colaboradores. É como ter minha<br/>
                    própria equipe de dev!</p>
                </p>                
            </div>
            <div className='footer'>
                <div className='imgFooter'>                
                <img className='logoFooter' src='../logo2.png'></img>    
                <div className='subTextFooter'>
                <p className='subTextFooter1'>AVENIDA PAULISTA, 171 - 4 ANDAR</p>
                <p className='subTextFooter2'>BELA VISTA - SÃO PAULO - SP</p>
                </div>
                <div className='textIcons'> ESCOLHA COMO QUER SER ATENDIDO </div>                  
                <div className='footerIcons'>                              
                <a href="https://api.whatsapp.com/send?phone=551130429855" target="_blank"><FontAwesomeIcon icon={faWhatsapp}className="iconWhatsapp"/></a>
                <a href="https://www.facebook.com/PerithusTech/" target="_blank"><FontAwesomeIcon icon={faFacebookF}className="iconFacebook"/></a>
                <a href="https://www.instagram.com/perithus_tech/?hl=pt-br" target="_blank"><FontAwesomeIcon icon={faInstagram}className="iconInstagram"/></a>
                <a href="https://www.linkedin.com/company/perithus-tech" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}className="iconLinkedin"/></a>           
                </div>                    
                </div>                
            </div>
        </div>
        </div>
    )   
}
