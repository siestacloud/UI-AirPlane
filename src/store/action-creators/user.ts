import { Dispatch } from "redux"
import { Flight, FlightAction, FlightActionTypes } from "../../types/user"


export const fetchFlight = () => {
  return async (dispatch: Dispatch<FlightAction>) => {
    try {
      dispatch({ type: FlightActionTypes.FETCH_FLIGHTS })
      const response = await fakeFlightAPI()
      console.log(response);
      dispatch({ type: FlightActionTypes.FETCH_FLIGHTS_SUCCESS, payload: response })
    } catch (e) {
      dispatch({ type: FlightActionTypes.FETCH_FLIGHTS_ERROR, payload: "error" })
    }
  }
}


function fakeFlightAPI() {
  return new Promise<Flight[]>((resolve, reject) => {
    setTimeout(() => {
      const flights = [
        {
          id: 1,
          from: "New York",
          to: "London",
          duration: "6h 30m",
          company: "Pobeda",
          price: 1600,
          currency: 'RUB',
          time: {
            startTime: "10:00",
            endTime: "11:00",
          },
          date: "10 марта 2023",
          connectionAmount: null
        },
        {
          id: 1,
          from: "Paris",
          to: "New York",
          duration: "6h 30m",
          company: "Aeroflot",
          price: 1600,
          currency: 'RUB',
          time: {
            startTime: "13:00",
            endTime: "18:00",
          },
          date: "10 марта 2023",
          connectionAmount: null
        },
        {
          id: 1,
          from: "New York",
          to: "London",
          duration: "6h 30m",
          company: "Aeroflot",
          price: 1600,
          currency: 'RUB',
          time: {
            startTime: "10:00",
            endTime: "11:00",
          },
          date: "10 марта 2023",
          connectionAmount: null
        },
        {
          id: 1,
          from: "New York",
          to: "Paris",
          duration: "6h 30m",
          company: "Aeroflot",
          price: 1600,
          currency: 'RUB',
          time: {
            startTime: "10:00",
            endTime: "11:00",
          },
          date: "10 марта 2023",
          connectionAmount: null
        },
        // { id: 2, from: "Paris", to: "Rome", duration: "2h 15m" },
        // { id: 3, from: "Tokyo", to: "Sydney", duration: "9h 45m" },
      ];


      resolve(flights);
    }, 2000); // Имитация задержки в 2 секунды
  });
}

// const fetchFlights = () => {
//   fakeFlightAPI()
//     .then(flights => {
//       console.log("Список авиаперелетов:", flights);
//       // Делайте что-то со списком авиаперелетов здесь
//     })
//     .catch(error => {
//       console.log("Ошибка при получении списка авиаперелетов:", error);
//       // Обработка ошибки здесь
//     });
// };
