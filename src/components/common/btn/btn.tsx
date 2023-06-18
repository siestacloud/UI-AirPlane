import { useDispatch } from "react-redux";
import { fetchFlightMore } from "../../../store/action-creators/action-flight";

export function Btn() {

  const dispatch = useDispatch()
  const handleLoadTicketMore = () => {
    dispatch(fetchFlightMore())
  }


  return (
    <button
      onClick={handleLoadTicketMore}
      className={`btn`}>
      Загрузить еще
    </button>
  );
}



