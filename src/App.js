//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { List, Map } from 'immutable';
import { Provider } from 'react-redux';

import './App.css';
import { VotingContainer } from './components/Voting';
import { ResultsContainer } from './components/Results';
import { store } from './components/Store';

//const pair = List.of('Trainspotting', '28 Days Later');
//const tally = Map({ 'Trainspotting': 5, '28 Days Later': 4 });

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/results" element={<ResultsContainer />} />
          <Route path="/" element={<VotingContainer />}>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
