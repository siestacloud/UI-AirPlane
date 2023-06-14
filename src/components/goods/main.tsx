import General from "../common/general/general";
import Menu from "../common/menu/menu";
import { Nav } from "../common/nav/nav";
import { Ticket } from "../common/ticket/ticket";

export const Main = () => {

  return (
    <main className='main'>
      <div className='main__wrapper'>
        <Menu />
        <General></General>
      </div>
    </main>
  );
}
