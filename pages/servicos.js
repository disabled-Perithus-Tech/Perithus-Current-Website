import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {Navbar} from '../components/Navbar'
import {Footer} from '../components/Footer'



const Servicos = () =>{
    const router = useRouter()
    return(
        <div className='servicos'>
            <title>Serviços</title>           
            <div className='bannerGeral'>
            <img className='logo' src='../logo.png'></img>
            <div>
            <Navbar/>
            </div>          
            </div>
            <div>
                <div className='borderServ'></div>
                <div className='textBorderServ'>Serviços</div>
                <div className='componentServ'>
                <div className='serv1'>
                <a className='imgServ1'><img src='./../imgServ1.png'></img>
                <div className='subTextServ1'>Sistemas e Plataformas para WEB <br/> <a>Pense grande, nacionalize ou internacionalize seu negócio<br/>
                 digital com nossas plataformas. Otime sua operação com<br/>
                 Sistemas e acelere a Transformação Digital!</a></div>
                </a>                
                </div>
                <div className='serv2'>
                <a className='imgServ2'><img src='./../imgServ2.png'></img></a>
                </div>
                <div className='serv3'>
                <a className='imgServ3'><img src='./../imgServ3.png'></img></a>
                </div>
                <div className='serv4'>
                <a className='imgServ4'><img src='./../imgServ4.png'></img></a>
                </div>  
                </div>                                           
            </div>
            <Footer/>
        </div>
    )
}
export default Servicos