import React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../action_creators';
import Winner from './Winner';

export const Results = ({ pair, tally, next, winner }) => {
    const getPair = () => {
        return pair || [];
    }

    const getVotes = (entry) => {
        console.log('TALLY >>', tally)
        if (tally && tally.hasOwnProperty(entry)) {
            return tally[entry]//tally.get(entry);
        }
        return 0;
    };

    return <>
        {winner ? <Winner winner={winner} /> : <div className='results'>
            <div className="tally">
                {getPair().map((entry) =>
                    <div key={entry} className={entry}>
                        <h1>{entry}</h1>
                        <div className="voteCount">
                            {getVotes(entry)}
                        </div>
                    </div>
                )}
            </div>
            <div className="management">
                <button
                    className="next"
                    onClick={next}>
                    Next
                </button>
            </div>
        </div>
        }
    </>
}

function mapStateToProps(state) {
    return {
      pair: state['voting'].getIn(['vote', 'pair']),
      tally: state['voting'].getIn(['vote', 'tally']),
      winner: state['voting'].get('winner')
    }
  }
  
  export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results);