
# Movie Details Viewer Application
## Repo - GSIV23_kavibarati_R 

This is a simple React application that uses Bootstrap for styling and Redux for state management. It utilizes React Router for navigation and includes a custom layout component used for browsing and searching movies available at this online API: that uses Bootstrap for styling and Redux for state management. It utilizes React Router for navigation and includes a custom layout component.


## Movie List React Component

This React component, `MovieList`, displays a list of movies fetched from an external API using the popular movie endpoint of The Movie Database (TMDb). It allows searching for movies by title and displaying basic movie details.

## Movie Details React Component

The `MovieDetails` component displays detailed information about a movie fetched from an external API using the movie details and credits endpoints of The Movie Database (TMDb). It showcases the movie's title, release year, length, director, cast, and overview.

## Get API

1. Create a personal account at: [SignUp Here](https://www.themoviedb.org/account/signup)
2. Once you have created an account, go to:
[API URL](https://www.themoviedb.org/settings/api) to create an API key
- Usage: Personal
- Application Name: Interview
- Application URL: None
- Application Summary: For a developer interview project

To fetch data from TMDb, you need to provide an API key. Make sure to replace "YOUR_API_KEY" in the fetch URLs with your actual TMDb API key.

Check [Introduction ](https://developers.themoviedb.org/3/gettingstarted/introduction.) for your reference 


## Installation

To run this application locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/kavibaratir/GSIV23_kavibarati_R.git

Navigate to the project directory:

 ```bash
 cd GSIV23_kavibarati_R
 ```

Install the required dependencies using npm or yarn:

 ```bash
 npm install
# or
 yarn install
```
Start the development server:

```bash
npm start
# or
yarn start
```

Open your browser and navigate to http://localhost:3000 to view the application.

## Features
- Utilizes Bootstrap CSS framework for responsive and visually appealing styling.
- Uses React Redux for efficient state management.
Implements React Router for easy navigation within the application.
- Fetches popular movie data from TMDb API.
- Displays a list of movie cards with title, backdrop image, overview, and vote average.
- Supports searching for movies by title.
- Clicking on a movie card opens a detailed view of the movie.
- Fetches detailed movie data and cast information from TMDb API.
- Displays movie title, backdrop image, release year, length, director, cast, and overview.


## Folder Structure
    src/: Contains the source code of the application.
    Layout/: Contains the custom layout component.
    store.js: Redux store configuration.
    App.js: Main application component.
    public/: Contains static assets and the HTML template for the application.
    Dependencies
    Bootstrap: CSS framework for styling.
    React Redux: State management library for React.
    React Router: Declarative routing for React applications.

## Test Application

To test the development server:

```bash
npm test
```
The application should should be in running status before running the test
To Test  Run npm test command by opening a parallel command prompt

By Default I have made some test cases to fail and These test cases need to be changed as per the environment and 
result outputs you expect.



