import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "./components/page-header";
import "./components/page-content";
import "./components/page-footer";

@customElement("landing-page")
export class LandingPage extends LitElement {
  render() {
    return html`<page-header name="Portfolio."></page-header>
      <page-content></page-content>
      <page-footer></page-footer> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "landing-page": LandingPage;
  }
}
