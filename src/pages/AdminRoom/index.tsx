import React from 'react'
import logoImg from '../../assets/images/logo.svg'
import deleteImg from '../../assets/images/delete.svg'
import checkImg from '../../assets/images/check.svg'
import answer from '../../assets/images/answer.svg'
import { Button, Separator, RoomCode, Question } from '../../components'
import { useHistory, useRouteMatch } from 'react-router-dom'
import UseRoom from '../../hooks/useRoom'
import { database } from '../../services/firebase'

type RoomParams = {
   id: string;
}

function AdminRoom() {
   const { params } = useRouteMatch<RoomParams>()
   const { title, questions } = UseRoom(params.id)
   const history = useHistory()

   async function handleEndRoom() {
      await database.ref(`/rooms/${params.id}`).update({
         endedAt: new Date()
      })
      history.push('/')
   }

   async function handleHighLightQuestion(id: string) {
      await database.ref(`/rooms/${params.id}/questions/${id}`).update({
         isHighlighted: true
      })
   }

   async function handleCheckQuestionAsAnswered(id: string) {
      await database.ref(`/rooms/${params.id}/questions/${id}`).update({
         isAnswered: true
      })
   }

   async function handleDeleteQuestion(id: string) {
      if(window.confirm('Tem certeza que deseja excluir essa pergunta?')) {
         await database.ref(`/rooms/${params.id}/questions/${id}`).remove()
      }
   }

   return (
      <div>
         <header>
            <div className='content'>
               <img src={logoImg} alt='letmeask'/>
               <div>
                  <RoomCode code={params.id}/>
                  <Button isOutlined onClick={handleEndRoom}>
                     Encerrar sala
                  </Button>
               </div>
            </div>
         </header>
         <main>
            <div className='room-title'>
               <h1>
                  Sala {title}
               </h1>
               {questions.length > 0 &&
               <span>
                  {questions.length} perguntas
               </span>
               }
            </div>
            <Separator y={10}/>
            {questions.map(question => (
               <Question
                  key={question.id}
                  content={question.content}
                  author={question.author}
                  isHighlighted={question.isHighlighted}
                  isAnswered={question.isAnswered}
               >
                  {
                  !question.isAnswered && (
                     <>
                        <button
                           type='button'
                           onClick={() => handleCheckQuestionAsAnswered(question.id)}
                        >
                           <img src={checkImg} alt='Marcar pergunta como respondida'/>
                        </button>
                        <button
                           type='button'
                           onClick={() => handleHighLightQuestion(question.id)}
                        >
                           <img src={answer} alt='Dar destaque a pergunta'/>
                        </button>
                     </>
                     )
                  }   
                  <button
                     type='button'
                     onClick={() => handleDeleteQuestion(question.id)}>
                     <img src={deleteImg} alt='deletar pergunta'/>
                  </button>
               </Question>
            ))}
         </main>
      </div>
   )
}

export default AdminRoom