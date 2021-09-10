import copyImg from '../../assets/images/copy.svg'
import { Button } from './styles'


type RoomCodeProps = {
   code?: string | undefined
}


function RoomCode({code}: RoomCodeProps) {
   function copyRoomCodeToClipBoard() {
      navigator.clipboard.writeText(String(code))
   }
   
   return (
      <Button onClick={copyRoomCodeToClipBoard}>
         <div>
            <img src={copyImg} alt='copyimg'/>
         </div>
         <span>
            Sala #{code}
         </span>
      </Button>
   );
}

export default RoomCode