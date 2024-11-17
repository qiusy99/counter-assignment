import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter'; 

test('renders counter message', () => {
  render(<Counter />);
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('+');
  const countValue = screen.getByTestId('count');

  userEvent.click(incrementButton);
  expect(countValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  const decrementButton = screen.getByText('-');
  const countValue = screen.getByTestId('count');

  userEvent.click(decrementButton);
  expect(countValue).toHaveTextContent('-1');
});