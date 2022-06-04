import React, {useRef} from "react";

export default function Voting({ pair, vote, hasVoted, winner }) {
    const getPair = () => {
        return pair || [];
    }
    const isDisabled = () => {
        return !!hasVoted;
    }
    const hasVotedFor = (entry) => {
        return hasVoted === entry;
    }
    const winnerRef = useRef(null);

    return <div className="voting">
        {winner ?
            <div ref={winnerRef}>Winner is {winner}!</div> :
            getPair().map((entry, idx) =>
                <button key={idx}
                    disabled={() => isDisabled()}
                    onClick={() => vote(entry)}>
                    <h1>{entry}</h1>
                    {hasVotedFor(entry) ?
                        <div className="label">Voted</div> :
                        null}
                </button>
            )
        }
    </div>
}