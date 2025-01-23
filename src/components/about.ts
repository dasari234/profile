import { css, LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("about-content")
export class AboutContent extends LitElement {
  render() {
    return html`
      <section class="about" id="about">
        <div class="content">
          <div class="title"><span>About Me</span></div>
          <div class="about-details">
            <div class="left">
              <img src="images/about.jpg" alt="" />
            </div>
            <div class="right">
              <div class="topic">Designing Is My Passion</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt, porro veritatis pariatur, nobis voluptatem ipsum
                repellat nemo quisquam error reprehenderit recusandae odio vel,
                suscipit. Voluptas mollitia accusantium quaerat aspernatur
                labore dolorum placeat ipsa sint nam perspiciatis eos
                consectetur veritatis debitis, quis aliquam unde sed maiores
                sit! Hic molestiae optio iste iure earum amet nostrum quaerat
                facere quae veniam maiores harum iusto aperiam vel inventore
                illo voluptatibus voluptates quo impedit voluptatum error vitae,
                omnis praesentium? Aperiam nulla non, nesciunt fuga rem
                perferendis alias et, temporibus, distinctio culpa unde a
                laborum libero ducimus. Facilis veniam sit praesentium,
                voluptatibus sint maxime iusto eaque.
              </p>
              <div class="button">
                <button>Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  static styles = css`
    .about .about-details {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .about .about-details .left {
      width: 45%;
    }

    .about .left img {
      height: 400px;
      width: 400px;
      object-fit: cover;
      border-radius: 12px;
    }

    .about-details .right {
      width: 55%;
    }
    .about-details .right p {
      text-align: justify;
      color: #0e2431;
    }


    section .content {
      width: 80%;
      margin: 40px auto;
      font-family: "Poppins", sans-serif;
    }

    section .title {
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
    }

    section .title span {
      color: #0e2431;
      font-size: 30px;
      font-weight: 600;
      position: relative;
      padding-bottom: 8px;
    }

    section .title span::before,
    section .title span::after {
      content: "";
      position: absolute;
      height: 3px;
      width: 100%;
      background: #4070f4;
      left: 0;
      bottom: 0;
    }

    section .title span::after {
      bottom: -7px;
      width: 70%;
      left: 50%;
      transform: translateX(-50%);
    }

    section .topic {
      color: #0e2431;
      font-size: 25px;
      font-weight: 500;
      margin-bottom: 10px;
    }



    section .button {
      margin: 16px 0;
    }

    section .button button {
      outline: none;
      padding: 8px 16px;
      border-radius: 4px;
      font-size: 25px;
      font-weight: 400;
      background: #4070f4;
      color: #fff;
      border: 2px solid transparent;
      cursor: pointer;
      transition: all 0.4s ease;
    }

    section .button button:hover {
      border-color: #4070f4;
      background-color: #fff;
      color: #4070f4;
    }
  `;
}
