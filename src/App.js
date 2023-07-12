import logo from './logo.svg';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import { HookCouter } from './Components/HookCouter';
import ClassCounterTwo from './Components/ClassCounterTwo';
import { HookCountertwo } from './Components/HookCountertwo';
import { HookCounterThree } from './Components/HookCounterThree';
import { HookCounterFour } from './Components/HookCounterFour';
import ClassCounterOne from './Components/ClassCounterOne';
import { HookCounterOne } from './Components/HookCounterOne';
import ClassMouse from './Components/ClassMouse';
import { HookMouse } from './Components/HookMouse';
import { MouseContainer } from './Components/MouseContainer';
import IntervalClassCounter from './Components/IntervalClassCounter';
import { IntervalHookCounter } from './Components/IntervalHookCounter';
import { DataFetching } from './Components/DataFetching';
//import { ComponentA } from './Components/ComponentA.js';
import { ComponentB } from './Components/ComponentB';
import { ComponentC } from './Components/ComponentC';
import React, { useReducer } from 'react';
import { CounterOne } from './Components/CounterOne';
import { CounterTwo } from './Components/CounterTwo';
import { CounterThree } from './Components/CounterThree';
import { CounterFour } from './Components/CounterFour';
import { DataFetchingOne } from './Components/DataFetchingOne';
import { DataFetchingTwo } from './Components/DataFetchingTwo';
// import { ComponentA } from './Components/ComponentA.js';

// export const UserContext=React.createContext()
// export const CompanyContext=React.createContext()
export const CountContext= React.createContext()

const initialState =0;
const reducer =(state,action)=>{
  switch (action){
    case 'increment':
      return state+1
    case 'decrement':
      return state-1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  const [count,dispatch]=useReducer(reducer,initialState);
  return (
    // <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
    <div className="App">
     {/* <ClassCounter/> */}
     {/* <HookCouter/> */}
     {/* <ClassCounterTwo/> */}
     {/* <HookCountertwo/> */}
     {/* <HookCounterThree/> */}
     {/* <HookCounterFour/> */}
     {/* <ClassCounterOne/> */}
     {/* <HookCounterOne/> */}
     {/* <ClassMouse/> */}
     {/* <MouseContainer/> */}
     {/* <IntervalClassCounter/> */}
     {/* <IntervalHookCounter/> */}
     {/* <DataFetching/> */}
     {/* <UserContext.Provider value='Farooq'>
      <CompanyContext.Provider value='CGG'>
      <ComponentC/>
      </CompanyContext.Provider>
     </UserContext.Provider> */}
     {/* <CounterOne/> */}
     {/* <CounterTwo/> */}
     {/* <CounterThree/> */}
     {/* count - {count}
     <ComponentA/>
     <ComponentB/>
     <ComponentC/> */}
     {/* <CounterFour/> */}
     {/* <DataFetchingOne/> */}
     <DataFetchingTwo/>
    </div>
    // </CountContext.Provider>
  );
}

export default App;
