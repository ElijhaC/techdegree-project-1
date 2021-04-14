/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Array of objects to store quotes data
***/

const quotes = [
  {
    quote: 'The great thing in this world is not so much where you stand, as in what direction you are moving.',
    source: 'Oliver Wendell Holmes',
    tag: 'Inspirational',
    year: 1952
  },
  {
    quote: 'There are some that only employ words for the purpose of disguising their thoughts',
    source: 'Voltaire',
    citation: 'Le Chapon et la Poularde',
    year: 1766
  },
  {
    quote: 'I started concentrating so hard on my vision that I lost sight',
    source: 'Robin Green',
    citation: 'Northern Exposure, Burning Down the House',
    year: 1992
  },
  {
    quote: 'Autumn is the bite of the harvest apple',
    source: 'Christina Petrowsky'
  },
  {
    quote: 'The height of cleverness is to be able to conceal it',
    source: 'Francois de La Rochefoucauld'
  },
  {
    quote: 'We must always change, renew, rejuvenate ourselves: otherwise we harden',
    source: 'Johann Wolfgang Von Goethe',
    tag: 'Motivational'
  },
  {
    quote: 'All Our Dreams Can Come True, if We Have the Courage to Pursue Them',
    source: 'Walt Disney',
    tag: 'Motivational'
  },
];


/***
 * Function to create a random number and use it to return a random quote. 
***/


function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
};
getRandomQuote();


/***
 * Function to display a new quote each time a user clicks the "Show another quote" button
***/

function printQuote() {

  let randomQuoteObj = getRandomQuote();
  let htmlString = `
   <p class="quote">${randomQuoteObj.quote}</p>
   <p class="source">${randomQuoteObj.source}`;

  if (randomQuoteObj.citation) {
    htmlString += `<span class="citation">${randomQuoteObj.citation}</span>`;
  };

  if (randomQuoteObj.year) {
    htmlString += `<span class="year">${randomQuoteObj.year}</span>`;
  };

  if (randomQuoteObj.tag) {
    htmlString += `<span class="tag">${randomQuoteObj.tag}</span>`;
  };

  htmlString += `</p>`;

  document.getElementById('quote-box').innerHTML = htmlString;

  /***
  * click event listener for the print quote button
  * DO NOT CHANGE THE CODE BELOW!!
  ***/

  document.getElementById('load-quote').addEventListener("click", printQuote, false);
};
printQuote();
