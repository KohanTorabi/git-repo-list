
# GitHub Repository Viewer

This is a web application built with Next.js and TypeScript that allows users to search for GitHub repositories based on a specific GitHub user. The application fetches data from the GitHub API and displays repository information such as name, visibility, languages, last update time, stars, and forks.

## Features

- Search for GitHub repositories by username
- Filter repositories by visibility (public, private, all)
- Display basic information for each repository
- Show the last update time in a human-readable format

## Installation

1. Clone the repository:

   `
   git clone https://github.com/KohanTorabi/git-repo-list.git` 

2.  Navigate to the project directory:
        
    `cd git-repo-list` 
    
3.  Install the dependencies:
        
    `npm install` 
    
4.  Start the development server:
        
    `npm run dev` 
    
5.  Open your web browser and visit [http://localhost:3000](http://localhost:3000/) to access the application.
    

## Configuration

The application does not require any additional configuration. The GitHub API calls are made on the server-side, and the necessary API endpoints are already defined in the code.

## Project Structure

-   `/components`: Contains the reusable React components used in the application.
-   `/pages`: Contains the Next.js pages for the application's routes.
-   `/styles`: Contains the SCSS files for styling the application.
-   `/types`: Contains the TypeScript type definitions used in the application.
-   `/utils`: Contains utility functions used in the application.
-   `/constants`: Contains constant values used in the application.

## Technologies Used

-   Next.js: React framework for server-side rendering and building web applications.
-   TypeScript: Adds static typing to JavaScript for improved developer productivity and code quality.
-   SCSS: Preprocessor for CSS that adds features such as variables, nesting, and mixins.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
Feel free to modify and customize the README according to your project's specific details and requirements.
Let me know if there's anything else I can help you with!