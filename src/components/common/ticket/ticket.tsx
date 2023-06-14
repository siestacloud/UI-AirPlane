import plane from './img/air.png';


export function Ticket() {
  return (
    <article className='ticket'>
      <div className='ticket__row'>
        <span className='ticket__price'>1600 руб</span>
        <img className='ticket__logo' src={plane} alt="" />
      </div>
      <div className='ticket__row'>
        <div className='ticket__desc'>
          <p>SVO - LED</p>
          <p>12:00 - 13:00</p>
        </div>
        <div className='ticket__desc'>
          <p>В пути</p>
          <p>4 ч 10м</p>
        </div>
        <div className='ticket__desc'>
          <p>Пересадки</p>
          <p>1 пересадка</p>
        </div>
      </div>
    </article>
  );
}



