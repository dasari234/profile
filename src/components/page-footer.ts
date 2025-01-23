import { css, LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("page-footer")
export class PageFooter extends LitElement {
  @property({ type: String })
  d = new Date();
  @property({ type: Number })
  year: number = this.d.getFullYear();

  render() {
    return html`
      <!-- Footer Section Start -->
      <footer>
        <div class="text">
          <span>&#169; ${this.year} All Rights Reserved</span>
        </div>
      </footer>
    `;
  }

  static styles = css`
    footer {
      background: #4070f4;
      padding: 0.2rem 0;
      text-align: center;
      font-family: "Poppins", sans-serif;
    }

    footer .text span {
      font-size: 0.7rem;
      font-weight: 400;
      color: #fff;
    }

    footer .text span a {
      font-weight: 500;
      color: #fff;
    }

    footer .text span a:hover {
      text-decoration: underline;
    }
  `;
}
