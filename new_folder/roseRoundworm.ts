import { denoUndefined } from "https://esm.town/v/nbbaier/denoUndefined";

if (denoUndefined()) {
  class HelloComponent extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `<h1>hello</h1>`;
    }
  }
  customElements.define("hello-component", HelloComponent);
}