import { FormEvent, useState } from 'react'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import Button from '../components/Button'
import { useHistory } from 'react-router'
import useAuth from '../hooks/useAuth'
import { database } from '../services/firebase'

import '../styles/auth.scss'

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
      <div id='page-auth'>
         <aside>
            <img src={illustrationImg} alt='ilustração/ perguntas e respostas'/>
            <strong>crie salas de Q&amp;A ao-vivo</strong>
            <p>tire as dúvidas da sua audiência em tempo-real</p>
         </aside>
         <main>
            <div className='main-content'>
               <img src={logoImg} alt='letmeask' />
               <button onClick={handleCreateRoom} className='create-room'>
                  <img src={googleIconImg} alt='logo do Google' />
                  crie sua sala com o Google
               </button>
               <div className='separator'>ou entre em uma sala</div>
               <form onSubmit={handleJoinRoom}>
                  <input
                     type='text'
                     placeholder='Digite o código da sala'
                     onChange={event => setRoomCode(event.target.value)}
                     value={roomCode}
                  />
                  <Button type='submit'>
                     Entrar na sala
                  </Button>
               </form>
            </div>
         </main>
      </div>
   )
}

export default Home