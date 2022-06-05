//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { List, Map } from 'immutable';

import './App.css';
import Voting from './components/Voting';
import Results from './components/Results';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/results" element={<Results />} />
        <Route path="/" element={<Voting pair={pair} />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
