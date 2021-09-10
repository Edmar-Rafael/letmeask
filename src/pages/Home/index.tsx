import { FormEvent, useState } from 'react'
import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'
import { Button } from '../../components'
import { useHistory } from 'react-router'
import useAuth from '../../hooks/useAuth'
import { database } from '../../services/firebase'
import { Aside, 
         Container, 
         Form, 
         Main, 
         Content, 
         Separator, 
         ButtonGoogle } 
      from './styles'


function Home() {
   const history = useHistory()
   const { user, signInWithGoogle } = useAuth()
   const [roomCode, setRoomCode] = useState('')

   async function handleCreateRoom() {
      if(!user) {
         await signInWithGoogle()
      }

   history.push('/rooms/new')
   }

   async function handleJoinRoom(event: FormEvent){
      event.preventDefault()

      if(roomCode.trim() === '') {
         return
      }

      const roomRef = await database.ref(`rooms/${roomCode}`).get()

      if(roomRef.exists()) {
         alert('Room does not exists')
         return
      }

      history.push(`rooms/${roomCode}`)
   }

   return (
      <Container>
         <Aside>
            <img src={illustrationImg} alt='ilustração/ perguntas e respostas'/>
            <strong>crie salas de Q&amp;A ao-vivo</strong>
            <p>tire as dúvidas da sua audiência em tempo-real</p>
         </Aside>
         <Main>
            <Content>
               <img src={logoImg} alt='letmeask' />
               <ButtonGoogle onClick={handleCreateRoom}>
                  <img src={googleIconImg} alt='logo do Google' />
                  crie sua sala com o Google
               </ButtonGoogle>
               <Separator>ou entre em uma sala</Separator>
               <Form onSubmit={handleJoinRoom}>
                  <input
                     type='text'
                     placeholder='Digite o código da sala'
                     onChange={event => setRoomCode(event.target.value)}
                     value={roomCode}
                  />
                  <Button type='submit'>
                     Entrar na sala
                  </Button>
               </Form>
            </Content>
         </Main>
      </Container>
   )
}

export default Home