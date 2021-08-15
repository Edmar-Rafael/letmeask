import { FormEvent, useState } from 'react'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import Button from '../components/Button'
import { Link, useHistory } from 'react-router-dom'
import { database } from '../services/firebase'

import useAuth from '../hooks/useAuth'

import '../styles/auth.scss'

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
      <div id='page-auth'>
         <aside>
            <img src={illustrationImg} alt='ilustração/ preguntas e respostas'/>
            <strong>crie salas de Q&amp;A ao-vivo</strong>
            <p>tire as dúvidas da sua audiência em tempo-real</p>
         </aside>
         <main>
            <div className='main-content'>
               <img src={logoImg} alt='letmeask' />
               <h2>Criar uma nova sala</h2>
               <form onSubmit={handleCreateRoom}>
                  <input
                     type='text'
                     placeholder='nome da sala'
                     onChange={(event) => setNewRoom(event.target.value)}
                     value={newRoom}
                  />
                  <Button type='submit'>
                     Criar sala
                  </Button>
               </form>
               <p>
                  Quer entrar em uma sala existente? <Link to='/'>clique aqui</Link>
               </p>
            </div>
         </main>
      </div>
   )
}

export default NewRoom