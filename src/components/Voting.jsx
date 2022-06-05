import React from "react";
import { connect } from 'react-redux';

import Winner from "./Winner";
import Vote from "./Vote";
import * as actionCreators from '../action_creators';

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
        hasVoted: state['voting'].get('hasVoted'),
        winner: state['voting'].get('winner'),
    };
}

export const VotingContainer = connect(mapStateToProps, actionCreators)(Voting);