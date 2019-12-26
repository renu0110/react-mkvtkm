import React, { useReducer } from 'react';
import { render } from 'react-dom';

const initialstate = 0;
const reducer = (state,action) => {
  console.log("current state",state,action)
 switch(action){
   case 'increment'  :
   return state + 1;
   case 'decrement' : 
   return state - 1;
   case 'reset' : 
   return initialstate;
   default : 
   return state;
 }
}

function App(){
  const [count,dispatch ] = useReducer(reducer,initialstate);
  console.log("new state count", count);
  return(
    <div>
    count - {count}
    <button onClick={()=> dispatch('increment')}>Increment</button>
    <button onClick={()=> dispatch('decrement')}>decrement</button>
    <button onClick={()=> dispatch('reset')}>reset</button>
    </div>
  )
}


render(<App />, document.getElementById('root'));
