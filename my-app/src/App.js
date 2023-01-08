// import logo from './logo.svg';
import "./App.css";
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreetingWithPrevState from "./components/StatefulGreetingWIthPrevState";
// import EventsClass from "./components/EventsClass";
// import EventsFunctional from "./components/EventsFunctional";
import EventBinding from "./components/EventBinding";

function App() {
  return ( 
    <div className="App">
    {/* <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike!" age="32"/> */}
    {/* <StatefulGreetingWithPrevState /> */}
    {/* <EventsFunctional /> */}
    {/* <EventsClass /> */}
    <EventBinding />
    </div >
  );
}

export default App;