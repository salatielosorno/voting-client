import { render, screen, fireEvent } from '@testing-library/react';
import { List, Map } from 'immutable';

import { Results } from '../Results';

describe('Results', () => {

    it('renders entries with vote counts or zero', () => {
        const pair = List.of('Trainspotting', '28 Days Later');
        const tally = Map({ 'Trainspotting': 5 });
        render(
            <Results pair={pair} tally={tally} />
        );

        expect(screen.getByText('Trainspotting')).toBeInTheDocument();
        expect(screen.getByText('5')).toBeInTheDocument();
        expect(screen.getByText('28 Days Later')).toBeInTheDocument();
        expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('invokes the next callback when next button is clicked', () => {
        let nextInvoked = false;
        const next = () => nextInvoked = true;

        const pair = List.of('Trainspotting', '28 Days Later');
        render(
            <Results pair={pair}
                tally={Map()}
                next={next} />
        );
        fireEvent.click(screen.getByText('Next'));

        expect(nextInvoked).toBe(true);
    });

    it('renders the winner when there is one', () => {
        render(
            <Results winner="Trainspotting"
                pair={["Trainspotting", "28 Days Later"]}
                tally={Map()} />
        );

        expect(screen.getByText('Winner is Trainspotting!')).toBeInTheDocument();
    });
});