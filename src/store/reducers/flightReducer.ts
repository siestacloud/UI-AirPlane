import { FlightAction, FlightState, FlightActionTypes } from "../../types/user";

 const initialState: FlightState = {
  flights: [],
  loading: false,
  error: null
}


export const flightReduser = (state = initialState, action:FlightAction): FlightState => {
  switch (action.type) {
    case FlightActionTypes.FETCH_FLIGHTS:
      return { loading: true, error: null, flights: [] }
    case FlightActionTypes.FETCH_FLIGHTS_SUCCESS:
      return { loading: false, error: null, flights: action.payload }
    case FlightActionTypes.FETCH_FLIGHTS_ERROR:
      return { loading: false, error: action.payload, flights: [] }

    default:
      return state;
  }
}