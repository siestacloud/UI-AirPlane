import Menu from "../common/menu/menu";
import { Nav } from "../common/nav/nav";

export const Main = () => {

  return (
    <main className='main'>
      <div className='main__wrapper'>
        <Menu />
        <div className="main__general">
          <Nav></Nav>
        </div>
      </div>
    </main>
  );
}
