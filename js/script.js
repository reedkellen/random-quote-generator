// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//FUNCTIONS
//getRandomNumber returns a random number including 0 but not "top".  It doesn't include the top value because the highest value needs to be the length of the array index -1.  For use in the getRandomQuote function.
function getRandomNumber( top ) {
  var randomNumber = Math.floor( Math.random() * top );
  return randomNumber;
}

function getRandomQuote( quoteLibrary ) {
  var arrayIndex = getRandomNumber( quoteLibrary.length );
  var randomQuote = quoteLibrary[arrayIndex];
  return randomQuote;
}

//Print quote function prints a random quote when the button is clicked.  It will leave off the citation and year of the quote if they don't exist by comparing whether it's undefined or not.
function printQuote() {
  var quoteToPrint = getRandomQuote( quoteLibrary );
  var htmlQuote = '<p class="quote">' + quoteToPrint.quote + '</p>';
  htmlQuote += '<p class="source">' + quoteToPrint.source;
  if ( quoteToPrint.citation !== undefined && quoteToPrint.year !== undefined ) {
    htmlQuote += '<span class="citation">' + quoteToPrint.citation + '</span>';
    htmlQuote += '<span class="year">' + quoteToPrint.year + '</span></p>';
  } else if ( quoteToPrint.citation !== undefined && quoteToPrint.year === undefined ) {
    htmlQuote += '<span class="citation">' + quoteToPrint.citation + '</span></p>';
  } else if ( quoteToPrint.citation === undefined && quoteToPrint.year !== undefined ) {
    htmlQuote += '<span class="year">' + quoteToPrint.year + '</span></p>';
  } else {
    htmlQuote += '</p>';
  }
  document.getElementById( 'quote-box' ).innerHTML = htmlQuote;
  //This code calls the randomColor function and assigns it to the variable newColor.  Then the page background and quote button are updated.
  var newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  document.getElementById( 'loadQuote' ).style.backgroundColor = newColor;
}

//EXCEEDS EXPECTATIONS FUNCTIONS
//This function generates a random value from 0 to 255
function randomRGBValue() {
  var value = Math.floor( Math.random() * (255 + 1) );
  return value;
}

//This function uses the randomRGBValue function to build an rgba value
function randomColor() {
  var color = 'rgba(' + randomRGBValue() + ', ' + randomRGBValue() + ', ' + randomRGBValue() + ', 1)';
  return color;
}

//VARIABLES
/*Creating an array of objects to serve as the library of quotes.  Quotes objects will follow the format below.
  quote: 'THE ACTUAL QUOTE GOES HERE',
  source: 'SOURCE OF THE QUOTE',
  citation: 'OPTIONAL - SPEECH OR PUBLICATION, NOT DISPLAYED IF NOTHING',
  year: 'OPTIONAL - YEAR/DATE OF THE QUOTE, NOT DISPLAYED IF NOTHING'
*/
var quotes = [
  {
    quote: 'Works of art make rules; rules do not make works of art.',
    source: 'Claude Debussy',
    tags: 'music'
  },
  {
    quote: 'To achieve great things, two things are needed; a plan, and not quite enough time.',
    source: 'Leonard Bernstein',
    tags: 'music'
  },
  {
    quote: 'Competitions are for horses, not artists.',
    source: 'Bela Bartok',
    tags: 'music'
  },
  {
    quote: 'I was obliged to be industrious.  Whoever is equally industrious will succeed equally well.',
    source: 'Johann Sebastian Bach',
    tags: 'music'
  },
  {
    quote: 'Mournful and yet grand is the destiny of the artist.',
    source: 'Franz Liszt',
    tags: 'music'
  },
  {
    quote: 'Lesser artists borrow, great artists steal.',
    source: 'Igor Stravinsky',
    tags: 'music'
  },
  {
    quote: 'Without craftsmanship, inspiration is a mere reed shaken in the wind.',
    source: 'Johannes Brahms',
    tags: 'music'
  },
  {
    quote: 'The musician is perhaps the most modest of animals, but he is also the proudest.',
    source: 'Erik Satie',
    tags: 'music'
  },
  {
    quote: 'Leave nothing for tomorrow which can be done today.',
    source: 'Abraham Lincoln',
    citation: 'Memorandum for law lecture',
    year: 1850,
    tags: 'politics'
  },
  {
    quote: 'This country, with its institutions, belongs to the people who inhabit it. Whenever they shall grow weary of the existing government, they can exercise their constitutional right of amending it, or their revolutionary right to dismember it or overthrow it.',
    source: 'Abraham Lincoln',
    citation: 'First Inaugural Address',
    year: 1861,
    tags: 'politics'
  },
  {
    quote: 'You can fool all the people some of the time, and some of the people all the time, but you can not fool all the people all of the time.',
    source: 'Abraham Lincoln',
    citation: 'Speech',
    year: 1856,
    tags: 'politics'
  },
  {
    quote: 'Those who deny freedom to others deserve it not for themselves.',
    source: 'Abraham Lincoln',
    citation: 'Letter to H.L. Pierce',
    year: 1859,
    tags: 'politics'
  }
];

//Declaring the quoteLibrary variable globally since there is only one quote library.
var quoteLibrary = quotes

//This creates a variable and uses the setInterval method to change the quote every 3 seconds.
var intervalID = window.setInterval( printQuote, 3000 );
