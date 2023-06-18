import { Flight } from '../../../types/flight';

export function Ticket(flight: Flight) {
  return (
    <article className='ticket'>
      <div className='ticket__row'>
        <span className='ticket__price'>{flight.price} {flight.currency}</span>
        <img className='ticket__logo' src={flight.logo} alt="" />
      </div>
      <div className='ticket__row'>
        <div className='ticket__desc'>
          <p>{flight.from} - {flight.to}</p>
          <p>{flight.time.startTime} - {flight.time.endTime}</p>
        </div>
        <div className='ticket__desc'>
          <p>В пути</p>
          <p>{flight.duration} </p>
        </div>
        <div className='ticket__desc'>
          <p>Пересадки</p>
          {flight.connectionAmount ?
            <>
              <p>{flight.connectionAmount} </p>
            </>
            :
            <>Без пересадок</>
          }
        </div>
      </div>
    </article>
  );
}



