# pet-project_09.movie-api

### Objectives

There are APIs that allow you to get information about movies. For example, these include OMDb RESTful API, The Movie Database (TMDB), and other suitable APIs can be used when creating an application.

This application displays information about movies upon user's request.

### Key features

1. Layout
     * the page has several movie cards and a search bar. Each movie card has a poster and the name of the movie. The card may also contain other                information provided by the API, such as a description of the movie, its rating on IMDb, etc.
     
     * in the application footer there is a link to the github of the author of the application, the year the application was created, the course logo        with a link to the course
   
2. When loading the application, the page displays movie cards with data received from the API

3. If you enter a word in the search field and send a search query, the page will display cards of films whose titles contain this word, if such data is provided by the API

4. Search
     * when opening the application, the cursor is in the input field
     * have placeholder
     * input field autocomplete disabled (no dropdown list with previous requests)
     * a search query can be sent by pressing Enter
     * after submitting a search query and displaying the search results, the search query continues to be displayed in the input field
     * in the input field there is a cross when clicked on which the search query is removed from the input field and placeholder is displayed


### Deploy

[movie-api](https://kbatyr-movie-app.netlify.app/)
