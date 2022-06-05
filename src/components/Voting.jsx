import React from "react";

import Winner from "./Winner";
import Vote from "./Vote";

export default function Voting({ pair, vote, hasVoted, winner}){
    return <div className="voting">
        {winner ?
            <Winner winner={winner} /> :
            <Vote pair={pair} vote={vote} hasVoted={hasVoted} />
        }
    </div>
}