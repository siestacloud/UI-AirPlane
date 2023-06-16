import { TypedUseSelectorHook } from "react-redux";
import { rootState } from "../store/reducers/rootReduser";
import { useSelector } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector