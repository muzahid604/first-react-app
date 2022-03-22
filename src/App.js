import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
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
      <Counter></Counter>
      <DataLoad name="{user.name}"></DataLoad>

    </div>

  );
}
function DataLoad() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }
    , [])
  return (
    <div>
      <h1>users</h1>
      {users.map(user => <User name={user.name}></User>)}
    </div>
  )
}
function User(props) {
  return (
    <div>
      <h3>Name:{props.name}</h3>
    </div>
  )
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
      <button>Add more</button>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(55);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h1>counter: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;
