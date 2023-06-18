import { FlightAction, FlightState, FlightActionTypes, Flight, Filter } from "../../types/flight";

const initialState: FlightState = {
  flights: [],
  loading: false,
  error: null,
  connectionAmountFilter: [{ title: "1 пересадка", enable: true, count: 1 }, { title: "2 пересадки", enable: true, count: 2 }, { title: "3 пересадки", enable: true, count: 3 }],
  companyFilter: [{ title: "Победа", enable: true }, { title: "Red Wings", enable: false }, { title: "s7", enable: false }],
  ticketFilter: [{ title: "Самый дешевый", enable: false }, { title: "Самый быстрый", enable: false }, { title: "Самый оптимальный", enable: false }]
}


export const flightReduser = (state = initialState, action: FlightAction): FlightState => {
  switch (action.type) {
    case FlightActionTypes.FETCH_FLIGHTS:
      return { ...state, loading: true, error: null, flights: [...state.flights] }
    case FlightActionTypes.FETCH_FLIGHTS_SUCCESS:
      return { ...state, loading: false, error: null, flights: action.payload }
    case FlightActionTypes.FETCH_FLIGHTS_ERROR:
      return { ...state, loading: false, error: action.payload, flights: [] }
    case FlightActionTypes.FETCH_FLIGHTS_ADD_MORE:
      return { ...state, loading: false, error: null, flights: [...state.flights, ...action.payload] }
    case FlightActionTypes.FILTER_BY_CONNECTION_AMOUNT:
      let NEW_STATE: FlightState = { ...state }
      if (action.payload === '1 пересадка') {
        NEW_STATE.connectionAmountFilter[0].enable = !NEW_STATE.connectionAmountFilter[0].enable
      }
      if (action.payload === '2 пересадки') {
        NEW_STATE.connectionAmountFilter[1].enable = !NEW_STATE.connectionAmountFilter[1].enable
      }
      if (action.payload === '3 пересадки') {
        NEW_STATE.connectionAmountFilter[2].enable = !NEW_STATE.connectionAmountFilter[2].enable
      }
      return NEW_STATE
    case FlightActionTypes.FILTER_BY_COMPANY:
      state.companyFilter.map(fc => {
        fc.enable = false
        if (fc.title === action.payload) {
          fc.enable = true
        }
      })
      return { ...state }
      case FlightActionTypes.FILTER_BY_TICKET:
        
        state.ticketFilter.map(tf => {
          if (tf.title === action.payload) {
            tf.enable = !tf.enable
            console.log("tf.enable ",tf.enable);
          }else{
            tf.enable = false
          }
          
        })
        console.log(state.ticketFilter);
        return { ...state }
  
    case FlightActionTypes.FETCH_FLIGHTS_SUCCESS_FILTER:
      let NEW_STATE_FILTER: FlightState = { ...state, flights: [],loading: false }

      state.connectionAmountFilter.map(af => {
        if (af.enable) {
          let flightsConnAmount = action.payload.filter(flight => flight.connectionAmount === af.count)
          NEW_STATE_FILTER.flights = [...NEW_STATE_FILTER.flights, ...flightsConnAmount]
        }
      })

      state.companyFilter.map(cf => {
        if (cf.enable) {
          console.log("ok", cf.title, action.payload);

          let flightsConnAmount = NEW_STATE_FILTER.flights.filter(flight => flight.company === cf.title)
          NEW_STATE_FILTER.flights = [...flightsConnAmount]

        }
      })

      state.ticketFilter.map(tf => {
        if (tf.enable) {
          if (tf.title === "Самый дешевый"){
            let min = Math.min(...NEW_STATE_FILTER.flights.map(item => item.price))
            let flightsConnAmount = NEW_STATE_FILTER.flights.filter(flight => flight.price === min)
            console.log(min);
            
            NEW_STATE_FILTER.flights = [...flightsConnAmount]
          }
          if (tf.title === "Самый быстрый"){
            let min = Math.min(...NEW_STATE_FILTER.flights.map(item => item.price))
            let flightsConnAmount = NEW_STATE_FILTER.flights.filter(flight => flight.price === min)
            console.log(min);
            
            NEW_STATE_FILTER.flights = [...flightsConnAmount]
          }
          if (tf.title === "Самый оптимальный"){
            let min = Math.min(...NEW_STATE_FILTER.flights.map(item => item.connectionAmount))
            let flightsConnAmount = NEW_STATE_FILTER.flights.filter(flight => flight.connectionAmount === min)
            console.log(min);
            
            NEW_STATE_FILTER.flights = [...flightsConnAmount]
          }
        }
      })
      console.log("NEW_STATE_FILTER", NEW_STATE_FILTER.flights);
      return NEW_STATE_FILTER
    default:
      return state;
  }
}