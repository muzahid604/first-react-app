import logo from './logo.svg';
import './App.css';
function App() {
  const players = ['muzahid', 'sakib', 'tamim', 'nasir', 'sabbir']
  const profession = ['they', ' are', 'cricketer']
  return (
    <div className="App">
      {
        players.map(player => <Person name={player} profession={profession} ></Person>)
      }
      <Product name="laptop" prices="3033"></Product>

      <Product name="phone" prices="33"></Product>

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

function Product(props) {
  return (
    <div className='player'>
      <h1>Name:{props.name}</h1>
      <h2>price:{props.prices} </h2>
    </div>
  )
}


export default App;
