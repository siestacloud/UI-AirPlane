import React from 'react';
import { useDispatch } from 'react-redux';
import { FlightActionTypes } from '../../../types/flight';
import { fetchFlightFilter } from '../../../store/action-creators/action-flight';


interface props {
  enable: boolean
  title: string
}
export function Checkbox({ enable,title }: props) {
  const dispatch = useDispatch()
  const HandleEnableFilter = () => {
    dispatch({ type: FlightActionTypes.FILTER_BY_CONNECTION_AMOUNT, payload: title })
    
    dispatch(fetchFlightFilter())
  }

  return (
    <div className="checkbox">
      <input type="checkbox" name={title} id={title} checked={enable} onChange={HandleEnableFilter} />
      <label htmlFor={title} className='checkbox__label'>{title}</label>
    </div>
  );
}


interface propsC {
  title: string
  enable: boolean
  // companyID: number

}

export function CheckboxCircle({ title, enable }: propsC) {
  const dispatch = useDispatch()


  const HandleEnableFilter = () => {
    dispatch({ type: FlightActionTypes.FILTER_BY_COMPANY, payload: title })
    dispatch(fetchFlightFilter())
  }

  return (
    <div className="checkbox">
      <input type="checkbox" name={title} id={title} checked={enable} onChange={HandleEnableFilter} />
      <label htmlFor={title} className='checkbox__label checkbox__label-circle'>{title}</label>
    </div>
  );
}



