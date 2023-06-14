export interface Ticket {
  id: number;
  from: string;
  to: string;
  company: string;
  price: number;
  currency: 'RUB';
  time: TicketTime | null;
  duration: number;
  date: string;
  connectionAmount: number | null;
}


export interface TicketTime {
  startTime: string;
  endTime: string;
}

export interface AppState {
  tickets: Ticket[]

}

export const DEF_APP_STATE: AppState = {
  tickets: [
    {
      id: 1,
      from: "",
      to: "",
      company: "",
      price: 1,
      time: null,
      duration: 1,
      date: "",
      currency: 'RUB',
      connectionAmount: 1,
    },
  ]
}


// function fakeFlightAPI() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const flights = [
//         { id: 1, from: "New York", to: "London", duration: "6h 30m" },
//         { id: 2, from: "Paris", to: "Rome", duration: "2h 15m" },
//         { id: 3, from: "Tokyo", to: "Sydney", duration: "9h 45m" },
//       ];


//       resolve(flights);
//     }, 2000); // Имитация задержки в 2 секунды
//   });
// }
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


// fetchFlights();