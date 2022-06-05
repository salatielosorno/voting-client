import React, { useRef } from 'react';

export default function Winner({ winner }) {
    const winnerRef = useRef(null);

    return <div ref={winnerRef} className="winner">
        Winner is {winner}!
    </div>
}