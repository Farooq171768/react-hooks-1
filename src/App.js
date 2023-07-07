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
     <HookCounterOne/>
    </div>
  );
}

export default App;
