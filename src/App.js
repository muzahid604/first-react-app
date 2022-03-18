import logo from './logo.svg';
import './App.css';
function App() {
  const players = ['sakib', 'tamim', 'nasir', 'sabbir']
  const profession = ['they', ' are', 'cricketer']
  return (
    <div className="App">
      {
        players.map(player => <Person name={player} profession={profession} ></Person>)
      }
    </div>
  );
}
function Person(props) {

  return (<div className='player'>
    <h1>{props.name}</h1>
    <h2>{props.profession}</h2>
    <h1>{props.naka}</h1>
  </div>)
}



export default App;
