import styled from 'styled-components'
import { Colors } from '../../resources'

export const Container = styled.div``

export const Header = styled.header`
   padding: 24px;
   border-bottom: 1px solid #e2e2e2;
`

export const Content = styled.div`
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   max-width: 1120px;

   >img{
      max-height: 45px;
   }

   >div{
      display: flex;
      gap: 16px;

      >button{
         height: 40px;
      }
   }
`

export const CodeRoom = styled.div``

export const Main = styled.main`
   max-width: 800px;
   margin: 0auto;
`

export const RoomTitle = styled.div`
   margin: 32px 0 24px;
   display: flex;
   align-items: center;

   h1{
      font-family: 'Poppins', sans-serif;
      font-size: 24px;
      color: #29292e;
   }
   span{
      margin-left: 16px;
      background: ${Colors.pink.dark};
      border-radius: 9999px;
      padding: 8px 16px;
      color: #fff;
      font-weight: 500;
      font-size: 14px;
   }
`

export const Form = styled.form`
   textarea{
      width: 100%;
      border: 0;
      min-height: 150px;
      padding: 16px;
      border-radius: 4px;
      background: ${Colors.white.details};
      box-shadow: ${Colors.boxShadow};
      resize: vertical;
      min-width: 130px;
   }
`

export const FormFooter = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 16px;
   span{
      font-size: 14px;
      color: ${Colors.gray.dark};
      font-weight: 500;

      button{
         background: transparent;
         border: 0;
         color: ${Colors.purple};
         text-decoration: underline;
         font-size: 14px;
         font-weight: 500;
         cursor: pointer;
      }
   }
`

export const UserInfo = styled.div`
   display: flex;
   align-items: center;

   img{
      width: 32px;
      height: 32px;
      border-radius: 50%;
   }

   >span{
      margin-left: 8px;
      color: ${Colors.black};
      font-weight: 500;
      font-size: 14px;
   }
`