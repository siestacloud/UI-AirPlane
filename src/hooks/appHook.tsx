import { createContext, useState, useContext } from "react";
import { AppState as AS, DEF_APP_STATE } from '../models/stateApp';


export interface AppContext {
  AppState: AS; //* state приложения, содержит данные о boards, issues
  Show: (i: number) => void; //* ругулировка отображения поля ввода или submenu в зависимости от board title 
  
}

const AppStateContext = createContext<AppContext>(
  { AppState: DEF_APP_STATE,
    Show() { },
   }
);

export const useAppState = () => useContext(AppStateContext);
type Props = { children: JSX.Element }

export const AppStateContextProvider = ({ children }: Props) => {


  const [AppState, setAppCustomState] = useState(DEF_APP_STATE)
  
  const Show = (i: number): void => {
  }

  return (
    <AppStateContext.Provider value={{ AppState,Show }} >
      {children}
    </AppStateContext.Provider>
  )
}