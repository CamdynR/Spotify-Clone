// router.js

export class Router {
  /**
   * Sets up the home function, the page name is always 'home'
   * @param {Function} homeFunc The function to run to set the home route
   *                            visually
   */
  constructor(homeFunc) {
    this['home'] = homeFunc;
  }

  /**
   * Adds a page name & function so to the router so that the function
   * can be called later when the page is passed in
   * @param {String} page The name of the page to route to (this is used
   *                      as the page's hash as well in the URL)
   * @param {Function} pageFunc The function to run when the page is called
   */
  addPage(page, pageFunc) {
    this[page] = pageFunc;
  }

  /**
   * Changes the page visually to the page that has been passed in. statePopped
   * is used to avoid pushing the history state on back/forward button presses
   * @param {String} page The name of the page to route to
   * @param {Boolean} statePopped True if this function is being called from a
   *                              'popstate' event instead of a normal card click
   */
  navigate(page, statePopped) {
    // Error if the page doesn't exist, do not continue
    if (!this[page]) {
      console.log('Error, page does not exist!');
      return;
    }

    // Build the hash if it isn't the home page
    let hash = '';
    if (page != 'home') hash += `#${page}`;

    // Push the state if the page isn't already there and it wasn't a
    // popstate event
    if (!statePopped && window.location.hash != hash) {
      history.pushState({ page: page }, '', window.location.origin + hash);
    }

    // Perform the function stored for the given page
    this[page]();
  }
}