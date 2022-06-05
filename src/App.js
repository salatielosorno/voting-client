//import logo from './logo.svg';
import './App.css';

import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];
function App() {
  return (
    <Voting pair={pair} />
  );
}

export default App;
