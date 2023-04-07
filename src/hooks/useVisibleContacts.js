import { useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/selectors";

export const useVisibleContacts = ()=> useSelector(selectVisibleContacts);