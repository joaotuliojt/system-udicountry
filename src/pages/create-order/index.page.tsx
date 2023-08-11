import { Check } from '@phosphor-icons/react'
import Header from '../../components/header'
import { FormOrder } from './styles'

export default function CreateOrder(){
    return(
        <>
            <Header Title="Novo Serviço"/>
            <main className="container px-6">
                <h3 className='my-6 font-bold text-3xl'>Cliente</h3>
                <FormOrder>
                    <input className='bg-zinc-200 rounded-full px-4 py-2' type="text" placeholder='Nome'/>
                    <input className='bg-zinc-200 rounded-full px-4 py-2' type="tel" placeholder='Nº Celular'/>
                    <input className='bg-zinc-200 rounded-full px-4 py-2' type="text" placeholder='Documento ( NF-e )'/>

                    <button className='font-bold text-amber-950' type='submit'> <Check className='text-amber-950' weight='bold'/> Confirmar</button>
                </FormOrder>
            </main>
        </>
    )
}