import { Btn } from '../btn/btn';
import { Nav } from '../nav/nav';
import { Ticket } from '../ticket/ticket';
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useEffect } from "react";
import { fetchFlight } from "../../../store/action-creators/action-flight";
import type { } from 'redux-thunk/extend-redux';
import { log } from 'console';
import { Flight } from '../../../types/flight';

function General() {
  const { flights, loading, error, connectionAmountFilter, companyFilter } = useTypedSelector((state) => state.flight)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFlight())
  }, [])


  // console.log("GENERAL flights => ", flights);



  // console.log("GENERAL flightsFilter => ", flightsFilter);

 


  return (
    <div className='general'>
      <Nav></Nav>
      <div className='general__row'>
        {error ? <div>error...</div> : <></>}
        {flights.map((flight, i) => <Ticket key={i} {...flight}></Ticket>)}
        {loading ? <div>Идет загрузка...</div> : <></>}
      </div>
      <Btn></Btn>
    </div>
  );
}
export default General;
