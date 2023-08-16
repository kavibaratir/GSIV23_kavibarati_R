import { render, screen } from '@testing-library/react';
import MovieList from '../Views/MovieList';

test('renders the App page', () => {
  render(<MovieList />)
  const element = screen.getByTestId('custom-element')
  // expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
  // expect(screen("Searchbutton", { name: "Search" })).not.toBeDisabled()
  // expect(screen.getByRole("img")).toBeInTheDocument();
});