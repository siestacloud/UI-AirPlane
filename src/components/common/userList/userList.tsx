import { useDispatch, useSelector } from "react-redux"
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useEffect } from "react";
import { fetchFlight } from "../../../store/action-creators/user";
import type {} from 'redux-thunk/extend-redux';

export const UserList: React.FC = () => {

  const { flights, loading, error } = useTypedSelector((state) => state.flight)
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(fetchFlight())
  }, [])

  if (loading) {
    return <div>Идет загрузка...</div>
  }
  if (error) {
    return <div>{error}</div>
  }

  console.log("OK");


  // const handlePlus = () => { dispatch({ type: 'PLUS' }) }
  // const handleMinus = () => { dispatch({ type: 'MINUS' }) }

  // console.log(state);


  return (
    <div>
      {flights.map((flight,i) => <div key={i}>{flight.to}</div> )}
    </div>
  );
}



