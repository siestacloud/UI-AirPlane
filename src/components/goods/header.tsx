import { Ico } from "../common/ico/ico";
import { Title } from "../common/title/title";

export const Header = () => {

  return (
    <header className="header">
      <div className='header__wrapper'>
        <Ico/>
        <Title title="Поиск авиабилетов" />
      </div>
    </header>
  );
}




