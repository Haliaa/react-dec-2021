import {useReducer} from "react";

const reducer = (state, action) => {
    const { type, payload} = action;
  switch (type){
      case 'inc1' :
      return { ...state, counter1: state.counter1 + 1 }
      case 'dec1' :
      return { ...state, counter1: state.counter1 - 1 }
    case 'inc2' :
      return { ...state, counter2: state.counter2 + 1 }
    case 'dec2' :
      return { ...state, counter2: state.counter2 - 1 }
    case 'inc3' :
      return { ...state, counter3: state.counter3 + 1 }
    case 'dec3' :
      return { ...state, counter3: state.counter3 - 1 }

    case 'reset1' :
      return { ...state, counter1: 0 }
    case 'reset2' :
      return { ...state, counter2: 0 }
    case 'reset3' :
      return { ...state, counter3: 0 }

    case 'set10' :
      return { ...state, counter1: 10 }
    case 'set20' :
      return { ...state, counter2: 20 }
    case 'set30' :
      return { ...state, counter3: 30 }

    default :
      console.error('невідомий тип!');
      return state;
  }
}

const App = () => {
   const [state,dispatch] = useReducer(reducer, { counter1: 0, counter2: 0, counter3: 0 })
    return (
      <div>
        <div>
          <h3>Counter1</h3>{state.counter1}
          <button onClick={() => dispatch({ type: 'inc1' })}>inc</button>
          <button onClick={() => dispatch({ type: 'dec1'})}>dec</button>
          <button onClick={() => dispatch({ type: 'reset1' })}>reset</button>
          <button onClick={() => dispatch({ type: 'set10' })}>set 10</button>
        </div>

        <div>
          <h3>Counter2</h3>{state.counter2}
          <button onClick={() => dispatch({ type: 'inc2'})}>inc</button>
          <button onClick={() => dispatch({ type: 'dec2'})}>dec</button>
          <button onClick={() => dispatch({ type: 'reset2' })}>reset</button>
          <button onClick={() => dispatch({ type: 'set20' })}>set 20</button>
        </div>

        <div>
          <h3>Counter3</h3>{state.counter3}
          <button onClick={() => dispatch({ type: 'inc3'})}>inc</button>
          <button onClick={() => dispatch({ type: 'dec3'})}>dec</button>
          <button onClick={() => dispatch({ type: 'reset3'})}>reset</button>
          <button onClick={() => dispatch({ type: 'set30'})}>set 30</button>
        </div>
      </div>
    );
};

export default App;