import { FormEvent, useState } from 'react'
import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import { Button } from '../../components'
import { Link, useHistory } from 'react-router-dom'
import { database } from '../../services/firebase'
import { Container, Aside, Form, Main, Content } from './styles'
import useAuth from '../../hooks/useAuth'


function NewRoom() {
   const { user } = useAuth()
   const history = useHistory()
   const [newRoom, setNewRoom] = useState('')


   async function handleCreateRoom(event: FormEvent) {
      event.preventDefault()

      if(newRoom.trim() === ''){
         return
      }

      const roomRef = database.ref('rooms')
      const firebaseRoom = await roomRef.push({
         title: newRoom,
         authorId: user?.id
      })

      history.push(`/rooms/${firebaseRoom.key}`)
   }

   return (
      <Container>
         <Aside>
            <img src={illustrationImg} alt='ilustração/ preguntas e respostas'/>
            <strong>crie salas de Q&amp;A ao-vivo</strong>
            <p>tire as dúvidas da sua audiência em tempo-real</p>
         </Aside>
         <Main>
            <Content>
               <img src={logoImg} alt='letmeask' />
               <h2>Criar uma nova sala</h2>
               <Form onSubmit={handleCreateRoom}>
                  <input
                     type='text'
                     placeholder='nome da sala'
                     onChange={(event) => setNewRoom(event.target.value)}
                     value={newRoom}
                  />
                  <Button type='submit'>
                     Criar sala
                  </Button>
               </Form>
               <p>
                  Quer entrar em uma sala existente? <Link to='/'>clique aqui</Link>
               </p>
            </Content>
         </Main>
      </Container>
   )
}

export default NewRoom