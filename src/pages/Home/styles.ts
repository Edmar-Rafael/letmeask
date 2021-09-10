import styled from 'styled-components'
import { Colors } from '../../resources'

export const Container = styled.div`
   display: flex;
   align-items: stretch;
   height: 100vh;      
`

export const Aside = styled.aside`
   flex: 7;
   background: ${Colors.purple};
   color: #fff;
   display: flex;
   justify-content: center;
   flex-direction: column;
   padding: 120px 80px;

   img{
      max-width: 320px;
   }

   strong{
      font: 700 36px 'Poppins', sans-serif;
      line-height: 32px;
      margin-top: 16px;
   }

   p{
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: ${Colors.white.background};
   }
`

export const Main = styled.main`
   flex: 8;
   padding: 0 32px;
   display: flex;
   align-items: center;
   justify-content: center;
`

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   max-width: 320px;
   align-items: stretch;
   text-align: center;

   >img{
      align-self: center;
   }
`

export const Form = styled.form`
   display: flex;
   flex-direction: column;

   input{
      height: 50px;
      border-radius: 8px;
      padding: 0 16px;
      background: #fff;
      border: 1px solid ${Colors.gray.medium};
   }

   button{
      margin-top: 16px;
   }

   button, input{
      width: 100%;
   }
`

export const Separator = styled.div`
   width: 100%;
   font-size: 14px;
   color: ${Colors.gray.medium};
   margin: 32px 0;
   display: flex;
   align-items: center;

   &:after{
      content: "";
      flex: 1;
      height: 1px;
      background: ${Colors.gray.medium};
      margin-left: 16px;
   }

   &:before{
      content: "";
      flex: 1;
      height: 2px;
      background: ${Colors.gray.medium};
      margin-right: 16px;
   }
`

export const ButtonGoogle = styled.button`
   margin-top: 64px;
   height: 50px;
   border-radius: 8px;
   font-weight: 500;
   background: #ea4335;
   color: #fff;

   display: flex;
   justify-content: center;
   align-items: center;

   cursor: pointer;
   border: 0;

   transition: filter 0.2s;

   img{
      margin-right: 8px;
   }

   &:hover{
      filter: brightness(0.9);
   }
`