import React from 'react';

export default function Vote({ pair, vote, hasVoted  }) {
    const getPair = () => {
        return pair || [];
    }
    const isDisabled = () => {
        return !!hasVoted;
    }
    const hasVotedFor = (entry) => {
        return hasVoted === entry;
    }

    return <div className='voting'>
        {getPair().map((entry, idx) =>
            <button key={idx}
                disabled={isDisabled()}
                onClick={() => vote(entry)}>
                {/*<span> hasVoted {hasVoted}</span>*/}
                <h1>{entry}</h1>
                {hasVotedFor(entry) ?
                    <div className="label">Voted</div> :
                    null}
            </button>
        )}
    </div>
}