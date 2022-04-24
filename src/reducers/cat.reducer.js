import {ADD, DELETE} from "./actions";
import {useReducer} from "react";

const reducer = (state, action) => {
  switch (action.type){
      case ADD:
          const cat = action.payload.cat;
          const [lastCat] = state.slice(-1)
          const id = lastCat ? lastCat.id +1:0
          const newVar = [...state, {id, name:cat}]
          console.log(newVar)
          return newVar

      case DELETE:
          const {id:catId} = action.payload
          const index = state.findIndex(cat=>cat.id === catId)
          state.splice(index,1)
          return [...state]
  }
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const useCatReducer = () => useReducer (reducer, [])
export {useCatReducer}

