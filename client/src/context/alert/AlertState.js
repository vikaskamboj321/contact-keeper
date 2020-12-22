import React, {useReducer} from 'react'
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { v4 as uuidv4 } from 'uuid';
import {
    SET_ALERT, REMOVE_ALERT
} from '../types';

const AlertState = props => {
    const initialState = []

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // set alert
    const setAlert = (msg, type, timeout = 5000) => {
        let id = uuidv4();
        dispatch({
            type: SET_ALERT,
            payload: {id, msg, type}
        });

        setTimeout(() => dispatch({type: REMOVE_ALERT, payload: id}), timeout)
    }

    return (
        <AlertContext.Provider
        value={{
            alerts: state,
            setAlert
        }}
        >
        {props.children}
        </AlertContext.Provider>
    )

}

export default AlertState;