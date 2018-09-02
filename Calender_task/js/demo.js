var events = [
  {'Date': new Date(2018, 7, 1), 'Title': '3'},
  {'Date': new Date(2018, 7, 1), 'Title': '3', 'Link': 'https://garfield.com'},
  {'Date': new Date(2018, 7, 15), 'Title': '2', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
  {'Date': new Date(2018, 7, 15), 'Title': '1', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);
