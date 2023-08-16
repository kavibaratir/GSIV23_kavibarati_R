import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieList from '../../../../src/Views/MovieList';

// Mock the react-router-dom's useNavigate function
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('MovieList component', () => {
  it('renders movie cards', async () => {
    // Mocking fetch to return a sample response
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [
              {
                id: 1,
                title: 'Sample Movie',
                vote_average: 7.5,
                backdrop_path: '/sample_path.jpg',
                overview: 'A sample movie overview.',
              },
            ],
          }),
      })
    );
    global.fetch = mockFetch;

    // Render the MovieList component
    render(<MovieList />);

    // Wait for the data to be fetched and components to render
    await screen.findByAltText('Sample');

    // Check if the movie card is rendered
    const movieTitle = screen.getByText('Sample Movie');
    expect(movieTitle).toBeInTheDocument();

    const movieVoteAverage = screen.getByText('(7.5)');
    expect(movieVoteAverage).toBeInTheDocument();

    // Simulate a click on the movie card
    userEvent.click(movieTitle);

    // Verify that the MovieDetails function is called with the correct ID
    expect(mockNavigate).toHaveBeenCalledWith('details/1');
  });
});
