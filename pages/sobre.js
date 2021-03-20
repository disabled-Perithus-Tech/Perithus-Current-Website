import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {Navbar} from '../components/Navbar'
import {Footer} from '../components/Footer'


const Sobre = () =>{
    const router = useRouter()
    return(
        <div className='contato'>
            <title>Sobre Nós</title>
            <div className='bannerGeral'>
            <img className='logo' src='../logo.png'></img> 
            <Navbar/>
           
            
            </div>
            <div></div>
            <Footer/>
        </div>
    )
}
export default Sobre