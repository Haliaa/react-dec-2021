import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";


function reducer (state=0, action) {
    // console.log(action)
    switch (action.type){
        case 'INC':
            return state + action.payload
        case 'DEC':
            return state - action.payload
        case 'RESET':
            return state= action.payload
    }
}
let store = createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App/></Provider>)



