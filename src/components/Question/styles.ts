import styled from 'styled-components'
import { Colors } from '../../resources'

export const Container = styled.div`
   background: ${Colors.white.details};
   border-radius: 8px;
   box-shadow: ${Colors.boxShadow};
   padding: 24px;
   margin-bottom: 12px;

   &.highlighted{
      background: #f4f0ff;
      border: 1px solid ${Colors.purple};
   }

   &.answered{
      background: #dbdcdd;
   }

   p{
      color:${Colors.black};
   }

   footer{
      display:flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 24px;

      >div{
         display:flex;
         gap: 16px;
      }

      button{
         border: 0;
         background: transparent;
         cursor: pointer;

         &.like-button{
            display: flex;
            align-items: flex-end;
            color: ${Colors.gray.dark};
            gap: 8px;

            transition: filter 0.2s;

            &.liked{
               color: ${Colors.purple};

               svg path{
                  stroke: ${Colors.purple};
               }
            }
         }

         &.hover{
            filter: brightness(0.7);
         }
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

   span{
      margin-left: 8px;
      color: ${Colors.gray.dark};
      font-size: 14px;
   }
`