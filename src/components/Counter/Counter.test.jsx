import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('should render the default counter value 10', () => {
  render(<Counter />);
  const countElement = screen.getByText('10');
  expect(countElement).toBeInTheDocument();
});

test('should render increment button', () => {
  render(<Counter />);
  const incrementButton = screen.getByRole('button', { name: 'Increment' });
  expect(incrementButton).toBeInTheDocument();
  expect(incrementButton).toBeEnabled();
});

test('when we click increment button the counter value should be increased', () => {
  render(<Counter />);
  
  const countElement = screen.getByText('10');
  expect(countElement).toBeInTheDocument();
  expect(countElement).toHaveTextContent('10');
  const incrementButton = screen.getByRole('button', { name: 'Increment' });

  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent('11');
});

test('should render decrement button', () => {
  render(<Counter />);
  const decrementButton = screen.getByRole('button', { name: 'Decrement' });
  expect(decrementButton).toBeInTheDocument();
  expect(decrementButton).toBeEnabled();
});

test('when we click decrement button the counter value should be decreased', () => {
  render(<Counter />);
  
  const countElement = screen.getByTestId('count');
  expect(countElement).toBeInTheDocument();
  expect(countElement).toHaveTextContent('10');
  const decrementButton = screen.getByRole('button', { name: 'Decrement' });

  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent('9');
});