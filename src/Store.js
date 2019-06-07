import React from 'react'
import io from 'socket.io-client';


export const Context = React.createContext();

const initialState = {
    general: [
        {from: 'aaron', msg: 'hello'},
        {from: 'arnold', msg: 'hello'},
        {from: 'Tashi', msg: 'hello'}
    ],
    topic2: [
        {from: 'Pema', msg: 'hello'},
        {from: 'Dichen', msg: 'hello'},
        {from: 'Sonam', msg: 'hello'}
    ]
}

function reducer(state, action) {
    const {from, msg} = action.payload;
    switch(action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [action.payload.topic]: [
                    ...state[action.payload.topic],
                    {
                        from,
                        msg
                    }
                ]
            }

            default:
                return state; 
    }
}

    let socket;

    function sendChatAction(value) {
        socket.emit('chat message', value);
    }

    const Store = (props) => {

    const [allChats, dispatch] = React.useReducer(reducer, initialState);    
    if(!socket) {
        socket = io(':3001');
        socket.on('chat message', function(msg) {
           dispatch({type: 'RECEIVE_MESSAGE', payload: msg})
        })
    }

    const user = 'Rigden' + Math.random(100).toFixed(2);

    return (
        <Context.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </Context.Provider>
    )
}

export default Store;
