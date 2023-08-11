import Image from 'next/image'
import { ListMagnifyingGlass,Plus } from '@phosphor-icons/react'

import Header from '../../components/header'
import ScanCode from '../../components/scancode'

import { WrapperList, WrapperSearch } from './styles'

import ExemploTenisBranco from '../../assets/tenis-branco.jpg'
import { Inter } from 'next/font/google'

const poppins = Inter({ subsets: ['latin'] })

export default function Order() {
  function handdleSearchOrder(){
    console.log("Executando!")
  }

  return (
    <>
      <Header Title='Serviços'/>
      <main className='container mx-auto px-4 relative'>
        
        <WrapperSearch>
          <input className='bg-zinc-200 rounded-full px-4 py-2' type="text" placeholder='Buscar...'/>
          <ListMagnifyingGlass onClick={handdleSearchOrder} className='cursor-pointer text-zinc-500' size={25} weight='bold'/>
        </WrapperSearch>

        <a href="/create-order" className='flex items-center gap-2 text-center mx-auto mt-10 font-bold text-amber-900 text-lg'><Plus size={20} weight='bold'/> Novo Serviço</a>

        <WrapperList>

          <div className="w-full flex h-auto box-image shadow-2xl">
            <Image className="object-cover rounded-3xl" alt='' src={ExemploTenisBranco} />

            <div className="infos p-10">
              <h3 className='text-white font-bold text-2xl'>Lucas Rodrigues</h3>
              <div className="date-value">
                <p className='text-white text-3xl'>12/05/23</p>
                <p className='text-white text-3xl'>R$48,00</p>
              </div>
            </div>
          </div>
          
          <div className="w-full flex h-auto box-image shadow-2xl">
            <Image className="object-cover rounded-3xl" alt='' src={ExemploTenisBranco} />

            <div className="infos p-10">
              <h3 className='text-white font-bold text-2xl'>Lucas Rodrigues</h3>
              <div className="date-value">
                <p className='text-white text-3xl'>12/05/23</p>
                <p className='text-white text-3xl'>R$48,00</p>
              </div>
            </div>
          </div>
          
          <div className="w-full flex h-auto box-image shadow-2xl">
            <Image className="object-cover rounded-3xl" alt='' src={ExemploTenisBranco} />

            <div className="infos p-10">
              <h3 className='text-white font-bold text-2xl'>Lucas Rodrigues</h3>
              <div className="date-value">
                <p className='text-white text-3xl'>12/05/23</p>
                <p className='text-white text-3xl'>R$48,00</p>
              </div>
            </div>
          </div>

        </WrapperList>

      </main>
      <ScanCode />
    </>
    
  )
}
