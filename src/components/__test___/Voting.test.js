import React from 'react';
import { createRoot } from 'react-dom/client';
//import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";

import Voting from '../Voting';

// In your test setup file
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let root = null;
let container = null;

beforeEach(() => {
    container = document.createElement('div');
    
    act(() => {
        root = createRoot(container);
    })
})

afterEach(() => {
    act(() => {
        root.unmount();
    })
    
    container = null;
})

it('renders a pair of buttons', () => {
    act(() => {
        root.render(<Voting pair={["Trainspotting", "28 Days Later"]}/>); 
    });

    expect(container.querySelector('button:nth-child(1)').textContent).toBe('Trainspotting');
    expect(container.querySelector('button:nth-child(2)').textContent).toBe('28 Days Later');
});

it('renders a pair of buttons', () => {
    act(() => {
        root.render(<Voting pair={["Dragon ball", "28 Days Later"]}/>);
    });

    expect(container.querySelector('button:nth-child(1)').textContent).toBe('Dragon ball');
});