import Reac from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import {List} from 'immutable';

import Voting from '../Voting';

it('renders a pair of buttons - fire click', () => {
    let votedWith;
    const vote = (entry) => { votedWith = entry };

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

it('disables buttons when user has voted', () => {
    const { container } = render(<Voting pair={["Blutterfly", "28 Days Later"]} hasVoted='Blutterfly' />);

    expect(screen.getByText('Blutterfly')).toBeInTheDocument();
    expect(screen.getByText('28 Days Later')).toBeInTheDocument();

    expect(container.querySelector('button:nth-child(1)')).toHaveAttribute('disabled');
    expect(container.querySelector('button:nth-child(2)')).toHaveAttribute('disabled');
});

it('adds label to the voted entry', () => {
    render(<Voting pair={["Blutterfly", "28 Days Later"]} hasVoted='Blutterfly' />);

    expect(screen.getByText('Voted')).toBeInTheDocument();
});

it('renders just the winner when there is one', () => {
    render(<Voting winner='Blutterfly' />);

    expect(screen.getByText('Winner is Blutterfly!')).toBeInTheDocument();
});

it('renders as a pure component', () => {
    const pair = ['Trainspotting', '28 Days Later'];

    render(<Voting pair={pair} />)
    expect(screen.getByText('Trainspotting')).toBeInTheDocument();

    pair[0] = 'Sunshine';

    render(<Voting pair={pair} />)
    expect(screen.getByText('Trainspotting')).toBeInTheDocument();
    
});

it('does update DOM when prop changes', () => {
    const pair = List.of('Trainspotting', '28 Days Later');
    
    render(<Voting pair={pair} />)
    expect(screen.getByText('Trainspotting')).toBeInTheDocument();

    const newPair = pair.set(0, 'Sunshine');

    render(<Voting pair={newPair} />)
    expect(screen.getByText('Sunshine')).toBeInTheDocument();
});