import React from 'react';
import Winner from './Winner';

export default function Results({ pair, tally, next, winner }) {
    const getPair = () => {
        return pair || [];
    }

    const getVotes = (entry) => {
        if (tally && tally.has(entry)) {
            return tally.get(entry);
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