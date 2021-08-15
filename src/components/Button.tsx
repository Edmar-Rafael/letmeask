import {ButtonHTMLAttributes} from 'react'

import '../styles/button.scss'; 

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
   isOutlined?: boolean
}

function Button({isOutlined = false, ...props}: ButtonProps) {

   return (
   <button className={isOutlined ? 'outlined' : ''} {...props} />
   )
}

export default Button