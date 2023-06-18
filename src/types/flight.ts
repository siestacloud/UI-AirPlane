export enum FlightActionTypes {
  FETCH_FLIGHTS = 'FETCH_FLIGHTS',
  FETCH_FLIGHTS_SUCCESS = 'FETCH_FLIGHTS_SUCCESS',
  FETCH_FLIGHTS_ERROR = 'FETCH_FLIGHTS_ERROR',
  FETCH_FLIGHTS_ADD_MORE = 'FETCH_FLIGHTS_ADD_MORE',
  FILTER_BY_CONNECTION_AMOUNT = 'FILTER_BY_CONNECTION_AMOUNT',
  FILTER_BY_COMPANY = 'FILTER_BY_COMPANY',
  FETCH_FLIGHTS_SUCCESS_FILTER = 'FETCH_FLIGHTS_SUCCESS_FILTER',
  FILTER_BY_TICKET = 'FILTER_BY_TICKET',
}


export interface FlightTime {
  startTime: string;
  endTime: string;
}

export interface Flight {
  logo: string
  id: number;
  from: string;
  to: string;
  company: string;
  price: number;
  currency: string;
  time: FlightTime;
  duration: string;
  date: string;
  connectionAmount: number;
}

export interface ConnectionAmount {
  title: string
  enable: boolean
  count: number
}
export interface Filter {
  title: string
  enable: boolean,
}


export interface FlightState {
  flights: Flight[];
  loading: boolean,
  error: null | string
  connectionAmountFilter: ConnectionAmount[]
  companyFilter: Filter[]
  ticketFilter: Filter[]
}

interface FetchFlightAction {
  type: FlightActionTypes.FETCH_FLIGHTS;
}
interface FetchFlightSuccessAction {
  type: FlightActionTypes.FETCH_FLIGHTS_SUCCESS;
  payload: Flight[];
}
interface FetchFlightErrorAction {
  type: FlightActionTypes.FETCH_FLIGHTS_ERROR;
  payload: string;
}
interface FetchFlightAddMoreAction {
  type: FlightActionTypes.FETCH_FLIGHTS_ADD_MORE;
  payload: Flight[];
}
interface FilterPlaneCounterAction {
  type: FlightActionTypes.FILTER_BY_CONNECTION_AMOUNT;
  payload: string;
}
interface FilterByCompanyAction {
  type: FlightActionTypes.FILTER_BY_COMPANY;
  payload: string;
}
interface FilterByTicketAction {
  type: FlightActionTypes.FILTER_BY_TICKET;
  payload: string;
}
interface FilterFlight {
  type: FlightActionTypes.FETCH_FLIGHTS_SUCCESS_FILTER;
  payload: Flight[];
}

export type FlightAction = FetchFlightAction | FetchFlightSuccessAction | FetchFlightErrorAction | FetchFlightAddMoreAction | FilterPlaneCounterAction | FilterFlight | FilterByCompanyAction |FilterByTicketAction



