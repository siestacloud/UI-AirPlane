import { Btn } from '../btn/btn';
// import { Counter } from '../counter/counter';
import { Nav } from '../nav/nav';
import { Ticket } from '../ticket/ticket';
import { UserList } from '../userList/userList';

function General() {
  return (
    <div className='general'>
      <Nav></Nav>
      <UserList></UserList>
      <div className='general__row'>
        <Ticket></Ticket>
        <Ticket></Ticket>
        <Ticket></Ticket>
      </div>
      <Btn></Btn>
    </div>
  );
}
export default General;
