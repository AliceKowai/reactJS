import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Footer() {
  return (
    <footer className='flex justify-between border-t-[1px] rgb(30 41 59)'>
        <div className='px-10'>
            <p>&copy Donate Crypto, Inc</p>
        </div>
        <div className='px-10'>
            <ul className='flex justify-around'>
                <li className='px-2'><a href='/'>Inicio</a></li>
                <li className='px-2'><a href='/create'>Nova Campanha</a></li>
                <li className='px-2'><a href='/donate'>Doar</a></li>
                <li className='px-2'><a href='/about'>Sobre</a></li>
            </ul>
        </div>
    </footer>
  )
}
