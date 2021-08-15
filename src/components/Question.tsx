import { ReactNode } from 'react'

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
         <div className={`question ${isAnswered ? 'answered' : ''} ${isHighlighted ? 'highlighted' : ''}`}>
            <p>
               {content}
            </p>
            <footer>
               <div className='UserInfo'>
                  <img src={author.avatar} alt='avatar'/>
                  <span>
                     {author.name}
                  </span>
               </div>
               <div>
                  {children}
               </div>
            </footer>
         </div>
      )
   }

   export default Question