var claps = [
  './Claps/AlexanderClap.gif',
  './Claps/CreapyClap.gif',
  './Claps/DelcanClap.gif',
  './Claps/dogClap.gif',
  './Claps/HeidiClap.gif',
  './Claps/kidClap.gif',
  './Claps/PinguClap.gif',
  './Claps/putinClap.gif',
  './Claps/RihannaClap.gif',
  './Claps/RyanClap.gif'
];

var searchTerm_claps = [
  'clap',
  'clap clap',
  'palmas',
  'salva de palmas',
  'palmas lentas',
  'batendo palmas'
];

// Replacing $(document).ready()
function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

// Adicionando função no ready
ready(onReady);
getGifFromTenor();

function onReady() {
  myAudio = new Audio('./Audio/applause.mp3');
  myAudio.addEventListener(
    'ended',
    function() {
      this.currentTime = 0;
      this.play();
    },
    false
  );
  myAudio.play();
}

function httpGetAsync(theUrl, callback, errorCallback) {
  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function() {
    debugger;

    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      callback(xmlHttp.responseText);
    } else if (xmlHttp.readyState == 4 && xmlHttp.status != 200) {
      errorCallback();
    }
  };

  xmlHttp.open('GET', theUrl, true);
  xmlHttp.send(null);

  return;
}

function tenorCallback_search(responsetext) {
  var response_objects = JSON.parse(responsetext);

  var gifs = response_objects['results'];

  if (gifs !== undefined) {
    ready(function() {
      document.getElementById('clap').src =
        gifs[Math.floor(Math.random() * 49)]['media'][0]['gif']['url'];
    });
  } else {
    tenorErrorCallback();
  }

  return;
}

function tenorErrorCallback() {
  ready(function() {
    document.getElementById('clap').src = claps[Math.floor(Math.random() * 9)];
  });

  return;
}

function getGifFromTenor() {
  var apikey = '18EXWLR6JJ7Z';
  var lmt = 50;

  var search_term = searchTerm_claps[Math.floor(Math.random() * 5)];

  var search_url =
    'https://api.tenor.com/v1/search?q=' +
    search_term +
    '&key=' +
    apikey +
    '&limit=' +
    lmt;

  httpGetAsync(search_url, tenorCallback_search, tenorErrorCallback);

  return;
}

