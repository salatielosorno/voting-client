import React from "react";
import { connect } from 'react-redux';

import Winner from "./Winner";
import Vote from "./Vote";

export const Voting = ({ pair, vote, hasVoted, winner }) => {
    return <div className="voting">
        {winner ?
            <Winner winner={winner} /> :
            <Vote pair={pair} vote={vote} hasVoted={hasVoted} />
        }
    </div>
}

function mapStateToProps(state) {
    return {
        pair: state['voting'].getIn(['vote', 'pair']),
        winner: state['voting'].get('winner')
    };
}

export const VotingContainer = connect(mapStateToProps)(Voting);