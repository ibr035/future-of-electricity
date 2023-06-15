# The future of electricity 

## how to run the application: 
clone down using `git clone https://github.com/ibr035/future-of-electricity.git`, run`npm install` and then run `yarn dev`. 

## Task description 
I decided to start with the main layout of the content I thought relevant. A page with more information concerning the topic, a page for the provider data, the consumption data and adding an article section for future implementation. 

Then I implemented some styling to make the sites look more consistent. I used some of the Tailwind.css templates as a base and then did some custom css in global.css.

After implementing a Navbar and correct routing I looked at the API and how to get the provider data from the API, this is still a work in progress as the CORS policy error, the  trial code is in test.jsx. 

I did manage to get the data from the JSON file and to list the providers. The overall goal was to create a filter based on dropdown values chosen by the user but due to time restriction this is not yet implemented. 


## Design
I decided to avoid the color green due to its connection with the environmental movement, and as this application does not show which electricity provider that provides the most environmental-friendly power it is better to not have the brand in a green color to avoid "green washing". 


## future implementation: 
- fix provider and consumption to get data through api instead of json data 
- Create filtering function on providers based on consumption of the user. 
  - Make it possible for the user to write their annual kwh usage and based on that give a recommendation on which would be cheapest and somehow include the hourly cost. 
- create a more elaborate design theme with mobile phone design an design for the different pages.
- create a template for articles posts 
- host system
- cookie GDPR setup 
- setup a CMS 
  