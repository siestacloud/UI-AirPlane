export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

// дефолтное состояние
export interface UserState {
  users: any[];
  loading: boolean,
  error: null | string
}

interface FetchUserAction {
  type: UserActionTypes.FETCH_USERS;
}
interface FetchUserSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}
interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction



// ============

export enum FlightActionTypes {
  FETCH_FLIGHTS = 'FETCH_FLIGHTS',
  FETCH_FLIGHTS_SUCCESS = 'FETCH_FLIGHTS_SUCCESS',
  FETCH_FLIGHTS_ERROR = 'FETCH_FLIGHTS_ERROR',
}


export interface FlightTime {
  startTime: string;
  endTime: string;
}

export interface Flight {
  id: number;
  from: string;
  to: string;
  company: string;
  price: number;
  currency: string;
  time: FlightTime;
  duration: string;
  date: string;
  connectionAmount: number | null;
}


// дефолтное состояние
export interface FlightState {
  flights: Flight[];
  loading: boolean,
  error: null | string
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
export type FlightAction = FetchFlightAction | FetchFlightSuccessAction | FetchFlightErrorAction



