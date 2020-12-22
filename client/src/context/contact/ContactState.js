import React, {useReducer} from 'react'
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jill Johnson',
                email: 'jill@gmail.com',
                phone: '111-111-1111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Sara Watson',
                email: 'sara@gmail.com',
                phone: '222-222-2222',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Harry White',
                email: 'harry@gmail.com',
                phone: '333-333-3333',
                type: 'professional'
            }
        ],
        current: null,
        filtered: null
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    // Add Contact
    const addContact = contact => {
        contact.id = uuidv4();
        dispatch({type: ADD_CONTACT, payload: contact})
    }

    // delete contact
    const deleteContact = id => {
        dispatch({type: DELETE_CONTACT, payload: id})
    }

    // set current contact
    const setCurrent = contact => {
        dispatch({type: SET_CURRENT, payload: contact})
    }
    
    //clear current contact
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT})
    }
    // update contact
    const updateCurrent = contact => {
        dispatch({type: UPDATE_CONTACT, payload: contact})
    }
    //filter contacts
    const filterContacts = text => {
        dispatch({type: FILTER_CONTACTS, payload: text})
    }
    //clear filter
    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER})
    }

    return (
        <ContactContext.Provider
        value={{
            current: state.current3,
            contacts: state.contacts,
            filtered: state.filtered,            
            addContact,
            deleteContact, 
            setCurrent, 
            clearCurrent,
            updateCurrent,
            filterContacts,
            clearFilter
        }}
        >
        {props.children}
        </ContactContext.Provider>
    )

}

export default ContactState;