import { House, SignOut } from '@phosphor-icons/react'

interface TitleProps{
    Title: string
}

export default function Header(props: TitleProps){
    return (
        <header className='bg-zinc-900 flex p-5 justify-between'>
            <a href="/"><House weight='fill' size={25} color='white' /></a>
                <h3 className='text-slate-50 font-bold'>{props.Title}</h3>
            <a href=""><SignOut size={25} color='white'/></a>
        </header>
    )
}