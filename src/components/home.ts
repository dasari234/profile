import { css, LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("home-content")
export class HomeContent extends LitElement {
  render() {
    return html`
      <section class="home" id="home">
        <div class="home-content">
          <div class="text">
            <div class="text-one">Hello,</div>
            <div class="text-two">I'm Srinivas Dasari</div>
            <div class="text-three">Senior UI Developer</div>
          </div>
          <div class="button">
            <button>Hire Me</button>
          </div>
        </div>
      </section>
    `;
  }

  static styles = css`
    .home {
      height: 100vh;
      width: 100%;
      /* background: url("images/background.png") no-repeat; */
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      font-family: "Ubuntu", sans-serif;
    }

    .home .home-content {
      width: 90%;
      height: 100%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .home .text-one {
      font-size: 25px;
      color: #0e2431;
    }

    .home .text-two {
      color: #0e2431;
      font-size: 75px;
      font-weight: 600;
      margin-left: -3px;
    }

    .home .text-three {
      font-size: 40px;
      margin: 5px 0;
      color: #4070f4;
    }

    .home .text-four {
      font-size: 23px;
      margin: 5px 0;
      color: #0e2431;
    }

    .home .button {
      margin: 14px 0;
    }

    .home .button button {
      outline: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 25px;
      font-weight: 400;
      background: #4070f4;
      color: #fff;
      cursor: pointer;
      border: 2px solid transparent;
      transition: all 0.4s ease;
    }

    .home .button button:hover {
      border-color: #4070f4;
      background-color: #fff;
      color: #4070f4;
    }
  `;
}
