import { Btn } from '../btn/btn';
import { Nav } from '../nav/nav';
import { Ticket } from '../ticket/ticket';

function General() {
  return (
    <div className='general'>
      <Nav></Nav>
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
