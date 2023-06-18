import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { FlightActionTypes } from "../../../types/flight";
import { fetchFlightFilter } from "../../../store/action-creators/action-flight";

export function Nav() {
  const { ticketFilter } = useTypedSelector((state) => state.flight)

  return (
    <article className="nav" >
      <BtnTicket enable={ticketFilter[0].enable} title={ticketFilter[0].title} style="border-mod-one"></BtnTicket>
      <BtnTicket enable={ticketFilter[1].enable} title={ticketFilter[1].title} style="border-mod-two"></BtnTicket>
      <BtnTicket enable={ticketFilter[2].enable} title={ticketFilter[2].title} style="border-mod-three"></BtnTicket>
    </article>
  );
}

interface props {
  title: string
  enable: boolean
  style: string
}

const BtnTicket = ({ title, enable, style }: props) => {


  const dispatch = useDispatch()
  const HandleEnableFilter = () => {
    dispatch({ type: FlightActionTypes.FILTER_BY_TICKET, payload: title })
    dispatch(fetchFlightFilter())
  }

  return (
    <button onClick={HandleEnableFilter} className={`nav__btn ${style} ${enable?"nav__btn-color":""}`}>{title}</button >
  )
}