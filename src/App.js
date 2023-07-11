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
import { ComponentA } from './Components/ComponentA.JS';
import { ComponentB } from './Components/ComponentB';
import { ComponentC } from './Components/ComponentC';
import React from 'react';
import { CounterOne } from './Components/CounterOne';
export const UserContext=React.createContext()
export const CompanyContext=React.createContext()



function App() {
  return (
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
     <CounterOne/>
     
    </div>
  );
}

export default App;
