import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faWhatsapp, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'


export const Footer = () =>{
    const router = useRouter()
    return(
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
    )
}
