// sp-nav-button/component.js

import styles from '../../css/components.css' assert { type: 'css' };

class SpNavButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <a draggable="false" class="root sp-nav-button">
        <slot name="icon"></slot>
        <slot name="text"></slot>
      </a>
    `;
    this.shadowRoot.adoptedStyleSheets = [styles];

    // Create a custom event to route to a specific page
    const routePage = new CustomEvent('route page', {
      detail: {
        page: this.getAttribute('data-page')
      }
    });

    // Dispatch the event with this element is clicked
    this.addEventListener('click', () => {
      this.dispatchEvent(routePage);
    });
  }
}

customElements.define('sp-nav-button', SpNavButton);