// import logo from './logo.svg';
import "./App.css";
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWIthPrevState";

function App() {
  return ( 
    <div className="App">
    {/* <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike!" age="32"/> */}
    <StatefulGreetingWithPrevState />
    </div >
  );
}

export default App;