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

   h2{
      font-size: 24px;
      color: ${Colors.black};
      margin: 64px 0 24px;
      font-family: 'Poppins', sans-serif;
   }

   p{
      font-size: 14px;
      color: ${Colors.gray.dark};
      margin-top: 16px;

      a{
      color: ${Colors.pink.dark};
      text-decoration: none;
      }
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