import { ReactNode } from 'react'
import { Container, UserInfo } from './styles'

type QuestionProps = {
   children?: ReactNode
   content: string;
   author: {
      name: String;
      avatar: string;
   };
   isHighlighted?: boolean;
   isAnswered?: boolean;
};

function Question({ content, author, children, isHighlighted = false, isAnswered = false}
   : QuestionProps) {

      return (
         <Container className={`question ${isAnswered ? 'answered' : ''} ${isHighlighted ? 'highlighted' : ''}`}>
            <p>
               {content}
            </p>
            <footer>
               <UserInfo>
                  <img src={author.avatar} alt='avatar'/>
                  <span>
                     {author.name}
                  </span>
               </UserInfo>
               <div>
                  {children}
               </div>
            </footer>
         </Container>
      )
   }

   export default Question