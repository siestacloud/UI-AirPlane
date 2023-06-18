import { Dispatch } from "redux"
import { Flight, FlightAction, FlightActionTypes } from "../../types/flight"
import pobeda from '../../components/common/ticket/img/air.png';
import rw from '../../components/common/ticket/img/rw.png';
import s7 from '../../components/common/ticket/img/s7.png';


export const fetchFlight = () => {
  return async (dispatch: Dispatch<FlightAction>) => {
    try {
      dispatch({ type: FlightActionTypes.FETCH_FLIGHTS })
      const response = await fakeFlightAPI()
      dispatch({ type: FlightActionTypes.FETCH_FLIGHTS_SUCCESS, payload: response })
    } catch (e) {
      dispatch({ type: FlightActionTypes.FETCH_FLIGHTS_ERROR, payload: "error" })
    }
  }
}


export const fetchFlightMore = () => {
  console.log("OK");
  
  return async (dispatch: Dispatch<FlightAction>) => {
    try {
      dispatch({ type: FlightActionTypes.FETCH_FLIGHTS })
      const response = await fakeFlightAPI()
      console.log(response);
      dispatch({ type: FlightActionTypes.FETCH_FLIGHTS_ADD_MORE, payload: response })
    } catch (e) {
      dispatch({ type: FlightActionTypes.FETCH_FLIGHTS_ERROR, payload: "error" })
    }
  }
}


export const fetchFlightFilter = () => {
  return async (dispatch: Dispatch<FlightAction>) => {
    try {
      dispatch({ type: FlightActionTypes.FETCH_FLIGHTS })
      const response = await fakeFlightAPI()
      console.log(response);
      dispatch({ type: FlightActionTypes.FETCH_FLIGHTS_SUCCESS_FILTER, payload: response })
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
          logo:pobeda,
          id: 1,
          from: "Москва",
          to: "Волгоград",
          duration: "1h 30m",
          company: "Победа",
          price: 2300,
          currency: 'RUB',
          time: {
            startTime: "10:00",
            endTime: "11:30",
          },
          date: "10 марта 2023",
          connectionAmount: 1
        },
        {
          logo:pobeda,
          id: 1,
          from: "Воронеж",
          to: "Санкт-Петербург",
          duration: "2h 30m",
          company: "Победа",
          price: 4200,
          currency: 'RUB',
          time: {
            startTime: "10:00",
            endTime: "12:30",
          },
          date: "10 марта 2023",
          connectionAmount: 2
        },
        {
          logo:pobeda,
          id: 1,
          from: "Брянск",
          to: "Москва",
          duration: "2h 30m",
          company: "Победа",
          price: 4600,
          currency: 'RUB',
          time: {
            startTime: "22:00",
            endTime: "00:30",
          },
          date: "14 марта 2023",
          connectionAmount: 3
        },
        {
          logo:pobeda,
          id: 1,
          from: "Железногорск",
          to: "Иваново",
          duration: "1h 30m",
          company: "Победа",
          price: 4700,
          currency: 'RUB',
          time: {
            startTime: "04:00",
            endTime: "05:30",
          },
          date: "20 марта 2023",
          connectionAmount: 3
        },
        {
          logo:rw,
          id: 1,
          from: "Берлин",
          to: "Рим",
          duration: "2h 30m",
          company: "Red Wings",
          price: 4760,
          currency: 'RUB',
          time: {
            startTime: "13:00",
            endTime: "15:30",
          },
          date: "29 марта 2023",
          connectionAmount: 1
        },
        {
          logo:rw,

          id: 1,
          from: "Рим",
          to: "Мадрид",
          duration: "3h 00m",
          company: "Red Wings",
          price: 7900,
          currency: 'RUB',
          time: {
            startTime: "10:00",
            endTime: "13:00",
          },
          date: "10 марта 2023",
          connectionAmount: 2
        },
        {
          logo:rw,
          id: 1,
          from: "Новосибирск",
          to: "Прага",
          duration: "2h 00m",
          company: "Red Wings",
          price: 12220,
          currency: 'RUB',
          time: {
            startTime: "10:00",
            endTime: "12:00",
          },
          date: "16 марта 2023",
          connectionAmount: 3
        },
        {
          logo:s7,
          id: 1,
          from: "Берлин",
          to: "Рим",
          duration: "2h 30m",
          company: "s7",
          price: 12900,
          currency: 'RUB',
          time: {
            startTime: "13:00",
            endTime: "15:30",
          },
          date: "29 марта 2023",
          connectionAmount: 1
        },
        {
          logo:s7,

          id: 1,
          from: "Рим",
          to: "Мадрид",
          duration: "3h 00m",
          company: "s7",
          price: 13100,
          currency: 'RUB',
          time: {
            startTime: "10:00",
            endTime: "13:00",
          },
          date: "10 марта 2023",
          connectionAmount: 2
        },
        {
          logo:s7,
          id: 1,
          from: "Новосибирск",
          to: "Прага",
          duration: "2h 00m",
          company: "s7",
          price: 14670,
          currency: 'RUB',
          time: {
            startTime: "10:00",
            endTime: "12:00",
          },
          date: "16 марта 2023",
          connectionAmount: 3
        },
        {
          logo:s7,
          id: 1,
          from: "Берлин",
          to: "Рим",
          duration: "2h 30m",
          company: "s7",
          price: 15400,
          currency: 'RUB',
          time: {
            startTime: "13:00",
            endTime: "15:30",
          },
          date: "29 марта 2023",
          connectionAmount: 2
        },
        {
          logo:s7,

          id: 1,
          from: "Рим",
          to: "Мадрид",
          duration: "3h 00m",
          company: "s7",
          price: 16600,
          currency: 'RUB',
          time: {
            startTime: "10:00",
            endTime: "13:00",
          },
          date: "10 марта 2023",
          connectionAmount: 2
        },
        {
          logo:s7,
          id: 1,
          from: "Новосибирск",
          to: "Прага",
          duration: "2h 00m",
          company: "s7",
          price: 17600,
          currency: 'RUB',
          time: {
            startTime: "10:00",
            endTime: "12:00",
          },
          date: "16 марта 2023",
          connectionAmount: 2
        },
        // { id: 2, from: "Paris", to: "Rome", duration: "2h 15m" },
        // { id: 3, from: "Tokyo", to: "Sydney", duration: "9h 45m" },
      ];


      resolve(flights);
    }, 500); // Имитация задержки в 2 секунды
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
