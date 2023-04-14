import { useState } from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Footer from '@/components/footer'
import { doLogin } from '@/services/web3Service'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [wallet, setWallet] = useState("")
  const [error, setError] = useState("")

  function btnLoginClick(){
    doLogin()
      .then(wallet => setWallet(wallet))
      .catch(err => setError(err.message))
  }

  return (
    <>
      <main className="flex flex-wrap items-center justify-between p-[45px] px-20">
        <div className='w-1/2'>
          <h1 className='text-6xl p-4 max-w-md'>Donate Crypto</h1>
          <p className='px-4'>Sua Plataforma descentralizada de doações</p>

          <p className='p-5'>Autentique-se com a sua carteira, crie sua campanha ou doe para campanhas existentes </p>
          {
            !wallet?
            <button className='group inline-flex items-center justify-center rounded-full text-sm py-2 px-5 mx-5 font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600' type='button' onClick={btnLoginClick}><img className='w-12' src='/metamask.svg' />Conectar com a MetaMask</button>
            : <></>
          }
          
          {wallet}
          {error}
        </div>
        <div className='w-1/2'>
          {
            !wallet? <img  src='/donateimg.jpg' /> : 
            <div>
              <h2 className='text-3xl'>Seja bem-vindo</h2>

              <p>O que gostaria de Fazer?</p>
              <br></br>
              <div className='flex flex-col'>
              <Link href="/create" className='w-48 rounded-full text-sm py-3 px-5 mx-5 font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600'>Criar uma campanha</Link>
              <Link href="/donate" className='w-56 rounded-full my-4 text-sm py-3 px-5 mx-5 font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2   bg-slate-400 text-white'>Doar para uma campanha</Link>
              </div>

            </div>
          }
          
        </div>
      </main>
      <Footer/>
    </>
  )
}
