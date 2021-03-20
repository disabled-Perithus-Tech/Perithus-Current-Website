import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {Navbar} from '../components/Navbar'
import {Footer} from '../components/Footer'



const Projetos = () =>{
    const router = useRouter()
    return(
        <div className='servicos'>
            <title>Projetos</title>           
            <div className='bannerGeral'>
            <img className='logo' src='../logo.png'></img>  
            <Navbar/>
           
            
            </div>
            <div></div>
            <Footer/>
        </div>
    )
}
export default Projetos