// sp-nav-button/component.js

import styles from '../../css/components.css' assert { type: 'css' };

class SpNavPlaylist extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  setPlaylist(title, route) {
    // Set the HTML in the Shadow Root
    this.shadowRoot.innerHTML = `
      <div draggable="false" class="root sp-nav-playlist">
        <p>${title}</p>
      </div>
    `;

    // Create a custom event to route to a specific page
    const routePlaylist = new CustomEvent('route playlist', {
      detail: {
        title: title,
        route: route
      }
    });

    // Dispatch the event with this element is clicked
    this.addEventListener('click', () => {
      this.dispatchEvent(routePlaylist);
    });
  }
}

customElements.define('sp-nav-playlist', SpNavPlaylist);