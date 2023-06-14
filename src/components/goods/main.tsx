import General from "../common/general/general";
import Menu from "../common/menu/menu";

export const Main = () => {
  return (
    <main className='main'>
      <div className='main__wrapper'>
        <Menu />
        <General />
      </div>
    </main>
  );
}
