import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";

import { GlobalStyle } from "./GlobalStyles";
import { Layout, MainTitle, Title } from "./Layout/Layout";
import ContactList from './ContactList'
import ContactForm from "./ContactForm";
import Filter from "./Filter";


const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch]);

    return (
        <Layout>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm/>
          <Title>Contacts</Title>
          <Filter/>
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList/>
        <GlobalStyle/>
        </Layout>
    );
  };

export default App; 

