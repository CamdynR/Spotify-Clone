// app.js

window.addEventListener('DOMContentLoaded', init);
window.addEventListener('beforeunload', cleanup);

/**
 * The initalizing function where the app begins
 */
function init() {
  addNavListeners();
  populatePlaylists(getPlaylists());
}

/**
 * Queries the navigation buttons and adds listeners for their
 * "route page" events
 */
function addNavListeners() {
  const spNavButtons = Array.from(document.querySelectorAll('sp-nav-button'));
  spNavButtons.forEach(elem => {
    elem.addEventListener('route page', e => {
      console.log(e.detail.page);
    });
  });
}

/**
 * Fetches all of the playlists
 * @return {array<object>} A list of all of the playlists with titles and links
 */
function getPlaylists() {
  return [{
    title: `Camdyn's Wrapped 2021`,
    route: ''
  }, {
    title: 'Spotify Wrapped 2021',
    route: ''
  }, {
    title: 'Discover Weekly',
    route: ''
  }, {
    title: 'Release Radar',
    route: ''
  }, {
    title: 'Fresh Finds',
    route: ''
  }, {
    title: 'Your Top Songs 2021',
    route: ''
  }, {
    title: 'Your Artists Revealed',
    route: ''
  }, {
    title: 'Brews or Brews',
    route: ''
  }, {
    title: 'skrrt skrrt',
    route: ''
  }, {
    title: 'Spotify Wrapped 2021',
    route: ''
  }, {
    title: 'Discover Weekly',
    route: ''
  }, {
    title: 'Release Radar',
    route: ''
  }, {
    title: 'Fresh Finds',
    route: ''
  }, {
    title: 'Your Top Songs 2021',
    route: ''
  }, {
    title: 'Your Artists Revealed',
    route: ''
  }, {
    title: 'Brews or Brews',
    route: ''
  }, {
    title: 'skrrt skrrt',
    route: ''
  }];
}

/**
 * Creates all of the <sp-nav-playlists> elements, populates them, adds
 * them to page, and add event listeners
 * @param {array<object>} playlists A list of all of the playlists with titles
 *                                  and links
 */
function populatePlaylists(playlists) {
  playlists.forEach(playlist => {
    const navPlaylist = document.createElement('sp-nav-playlist');
    navPlaylist.setPlaylist(playlist.title, playlist.route);
    // Append to the page
    document.querySelector('#sidebar--playlist-nav').append(navPlaylist);
    // Add event listeners to each of the new playlists
    navPlaylist.addEventListener('route playlist', e => {
      console.log(e.detail.title);
    });
  });
}

/**
 * Frees any memory / generally cleans up the app before unload
 */
function cleanup() {
  // TODO
}