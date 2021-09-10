import React, {ButtonHTMLAttributes} from 'react'
import { Btn } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
   isOutlined?: boolean
}

function Button({isOutlined = false, ...props}: ButtonProps) {

   return (
   <Btn className={isOutlined ? 'outlined' : ''} {...props} />
   )
}

export default Button