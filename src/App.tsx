//import Button from './components/Button'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './contexts/AuthContext'
import Routes from './routes';
import { Styles as GlobalStyle } from './resources'


function App() {
  
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes/>
      </AuthContextProvider>
      <GlobalStyle/>
    </BrowserRouter>    
  )
}

export default App;
