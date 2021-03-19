import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {Navbar} from '../Components/Navbar'
import {Footer} from '../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faWhatsapp, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'


const Contato = () =>{
    const router = useRouter()
    return(
        <div className='contato'>
            <title>Contato</title>
            <div className='bannerGeral'>
            <img className='logo' src='../logo.png'></img> 
            <Navbar/>
           
            
            </div>
            <div className='faleContato'>
            <p> FALE COM A GENTE </p>
            <div className='borderContatos'>
            </div>
            <p className='textBorderContatos'>ENCONTRE NOSSOS CANAIS E MANDE SUA MENSAGEM, RESPONDEMOS RAPIDINHO!</p>
            </div>
            <div className='gridContatos'>
                <p>Nossos Canais</p>                
            </div>            
                <div className='footerIcons2'>
                    <a>
                    <a href="https://api.whatsapp.com/send?phone=551130429855" target="_blank"><FontAwesomeIcon icon={faWhatsapp}className="iconWhatsapp2"/>                    
                    </a>                      
                    </a>
                    <a>
                    <a></a>   
                    </a>
                    <div>
                    <a>
                    <a href="https://www.facebook.com/PerithusTech/" target="_blank"><FontAwesomeIcon icon={faFacebookF}className="iconFacebook2"/>
                    </a>                    
                    </a>      
                    </div>                        
                    
                                      
                    
                </div>
                       
                            
            <Footer/>
        </div>
    )
}
export default Contato