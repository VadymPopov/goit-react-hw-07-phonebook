import React from "react";
import {MdDelete} from 'react-icons/md';
import { List, Item, IconUser, Text, Button } from "./ContactList.styled";

import {deleteContact} from 'redux/operations';
import { useDispatch } from "react-redux";
import { useVisibleContacts } from "hooks";

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useVisibleContacts();
    
    return (
        <List>
            {contacts.map(({name, id, number})=>
            <Item key={id}>
                <Text><IconUser/>{name} : {number}</Text>
            <Button type="button" onClick={()=>dispatch(deleteContact(id))}><MdDelete/></Button>
            </Item>
            )}
        </List>
    );
};

export default ContactList;