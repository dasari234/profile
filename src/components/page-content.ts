import { css, LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./home";
import "./about";

@customElement("page-content")
export class PageContent extends LitElement {
  render() {
    return html`
      <div class="section">
        <home-content></home-content>
        <about-content></about-content>
      </div>
    `;
  }

  static styles = css`
    section {
      padding-top: 40px;
    }
  
  `;
}
