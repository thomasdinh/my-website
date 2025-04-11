import logo from './logo.svg';
import './App.css';
import './components/Timeline.jsx';
//import Timeline from './components/Timeline.jsx';
import TimelineItem, {timestamp} from './components/TimelineItem.jsx';




function App() {
  const first_job = new timestamp(2018, "Customer Support", "Working...");
  const second_job = new timestamp(2019, "Customer Support", "Working...");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className='timelineList'>
          <TimelineItem timestamp={first_job}/>
          <TimelineItem timestamp={second_job}/>
        </div>
      </header>
    </div>
  );
}

export default App;
