import { render, screen } from '@testing-library/react';
import App from './App';
import Result from "./components/results"
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Go/i);
  expect(linkElement).toBeInTheDocument();
});




test('should render a list!', () => {
  const results = [{data: 'http://luke.com' }];
  render(<Result data={results} count={1} />);
  const items = screen.getAllByRole('pre');
  console.log(items[0]);
  expect(items).toHaveLength(1);
});