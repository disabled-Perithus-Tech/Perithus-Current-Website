import React from 'react'
import Link from 'next/link'



export const Navbar =() => {

    return(
        <div className='Navbar'>              
            <div className='text-Navbar'>
                <Link href='/'>
                <a className='textNav1'>Home</a>
                </Link>
                <Link href='/'>
                <a className='textNav2'>Sobre nós</a>
                </Link>
                <Link href='/'>
                <a className='textNav3'>Serviços</a>
                </Link>
                <Link href='/'>
                <a className='textNav4'>Carreiras</a>
                </Link>
                <Link href='/'>
                <a className='textNav5'>Contato</a> 
                </Link>           
            </div>        
           
       </div>
    )

        

    
       
        
    
}