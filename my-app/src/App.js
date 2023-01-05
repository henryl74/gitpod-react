import logo from './logo.svg';
import './App.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";

function App() {
  return ( 
    <div className ="App">
    {/* <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike!" age="32"/> */}
    <StatefulGreetingWithCallback greeting="I'm a stateful class component!" />
    </div >
  );
}

export default App;