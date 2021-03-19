import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'


export const Navbar = () =>{
    const router = useRouter()
    return(
        <div className='Navbar'>
                <div className='text-Navbar'>
                <a onClick={() => {router.push('/home')}}>
                <a className='textNav1'>Home</a>
                </a>
                <a onClick={() => {router.push('/sobre')}}>
                <a className='textNav2'>Sobre nós</a>
                </a>
                <a onClick={() => {router.push('/servicos')}}>
                <a className='textNav3'>Serviços</a>
                </a>
                <a onClick={() => {router.push('/')}}>
                <a className='textNav4'>Carreiras</a>
                </a>

                <a onClick={() => {router.push('/projetos')}}>
                <a className='textNav6'>Projetos</a>
                </a>

                <a onClick={() => {router.push('/contato')}}>
                    <a className='textNav5'>Contato</a>
                </a>                              
        </div>
        </div>        
    )
}
