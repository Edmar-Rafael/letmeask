import { createGlobalStyle } from 'styled-components'
import { Colors } from '..'

export default createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-shadow: border-box;
   }
   body{
      min-height: 100vh;
      background: ${Colors.white.background};
      color: ${Colors.black};
   }
   body, input, button, textarea{
      font: 400 16px 'Roboto', sans-serif;
   }
`;