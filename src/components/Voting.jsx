import React from "react";

export default function Voting({ pair }) {
    const getPair = () => {
        return pair || [];
    }

    return <div>
        {getPair().map((entry, idx) =>
            <button key={idx}>
                <h1>{entry}</h1>
            </button>
        )}
    </div>
}