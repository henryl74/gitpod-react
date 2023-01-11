// import logo from './logo.svg';
import "./App.css";
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreetingWithPrevState from "./components/StatefulGreetingWIthPrevState";
// import EventsClass from "./components/EventsClass";
// import EventsFunctional from "./components/EventsFunctional";
// import EventBinding from "./components/EventBinding";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";

function App() {
  return ( 
    <div className="App">
    {/* <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike!" age="32"/> */}
    {/* <StatefulGreetingWithPrevState /> */}
    {/* <EventsFunctional /> */}
    {/* <EventsClass /> */}
    {/* <EventBinding /> */}
    <ConditionalRenderingClass />
    <ConditionalRenderingFunctional connected={true} />
    </div >
  );
}

export default App;