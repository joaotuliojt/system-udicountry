import { Barcode } from '@phosphor-icons/react'

import { BoxCode } from './styles'

export default function ScanCode(){
    return(
        <BoxCode>
            <Barcode size={32} color='white'/>
        </BoxCode>
    )
}