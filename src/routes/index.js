import { Home, NewRoom, Room, AdminRoom } from "../pages"
import { Switch, Route } from 'react-router-dom'


export default function Routes() {
   return (
      <Switch>
         <Route path={'/'} component={Home} exact />
         <Route path={'/rooms/new'} component={NewRoom} exact />
         <Route path={'/rooms/:id+'} component={Room} exact />
         <Route path={'/admin/rooms/:id+'} component={AdminRoom} exact />
      </Switch>
   )
}