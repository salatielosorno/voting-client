import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Voting from '../Voting';


it('renders a pair of buttons', () => {
    let votedWith;
    const vote = (entry) => votedWith = entry;

    render(<Voting pair={["Trainspotting", "28 Days Later"]} vote={vote} />);
    expect(screen.getByText('Trainspotting')).toBeInTheDocument();
    expect(screen.getByText('28 Days Later')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Trainspotting'));

    expect(votedWith).toBe('Trainspotting');
});

it('renders a pair of buttons', () => {
    render(<Voting pair={["Dragon ball", "28 Days Later"]} />);
    expect(screen.getByText('Dragon ball')).toBeInTheDocument();
});