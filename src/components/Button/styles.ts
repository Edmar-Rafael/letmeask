import styled from 'styled-components'
import { Colors } from '../../resources'

export const Btn = styled.button`
   height: 50px;
   border-radius: 8px;
   font-weight: 500;
   background: ${Colors.purple};
   color: #fff;
   padding: 0 32px;

   display: flex;
   justify-content: center;
   align-items: center;

   cursor: pointer;
   border: 0;

   transition: filter 0.2s;

   img{
      margin-right: 8px;
   }

   &.outlined{
      background: #fff;
      border: 1px solid ${Colors.purple};
      color: ${Colors.purple};
   }

   &::not(:disabled):hover{
      filter: brightness(0.9);
   }

   &:disabled{
      opacity: 0.6;
      cursor: not-allowed;
   }
`;
