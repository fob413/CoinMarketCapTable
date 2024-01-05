import React from 'react';
import { render, screen } from './test-utils';
import App from './App';

test('renders the application', () => {
  render(<App />);
  expect(screen.getByTestId('App')).toBeInTheDocument();
});
