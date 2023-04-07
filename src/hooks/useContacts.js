import { useSelector } from "react-redux";
import { selectContacts } from "redux/selectors";

export const useContacts = ()=> useSelector(selectContacts);