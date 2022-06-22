# Rest Countries API Documentation

The main components of the application are the following:

1. Header which contains the title and the Dark Mode section. When you press the Dark Mode the background color and the color of the elements should change
2. Country which contains the card for each country along with the details requested.
3. CountryDetails helps users see more details about a specific country and the borders of each one of them.

App.js contains the fetching methods for getting the countries data.
When the page loads the useEffect hook gets called and the data is fetched from the server.
The application provides input field in order to search for particular countries as well as select option to filter the countries by the region.

Whenever a user clicks on a country element it will redirected to the country details page.
The path param in the route is country code (alpha3code)

Features implemented:

- See all countries from the API on the homepage on load
- Search for a country using an input field
- Click on a country to see more detailed information on a separate page

- Configured the repository to publish the code to a web address using Netlify ( https://rest-countries-api-ef.netlify.app/ )
- Toggle the color scheme between light and dark mode
- Filter countries by region
- Click through to the border countries on the detail page
- Testing the features with Cypress ( cypress/e2e/countries_app.cy.js )
