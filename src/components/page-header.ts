import { css, LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("page-header")
export class PageHeader extends LitElement {
  @property({ type: String })
  name: string = "LOGO";

  @property({ type: Boolean })
  isSticky = false;

  requestUpdate() {
    super.requestUpdate();
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 20) {
        this.isSticky = true;
        // scrollBtn.style.display = "block";
      } else {
        this.isSticky = false;
        // scrollBtn.style.display = "none";
      }
    };
  }

  render() {
    return html`
      <nav class="${this.isSticky ? "sticky" : ""}">
        <div class="navbar">
          <div class="logo"><a href="#">${this.name}</a></div>
          <ul class="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <div class="cancel-btn">
              <i class="fas fa-times"></i>
            </div>
          </ul>
        </div>
        <div class="menu-btn">
          <i class="fas fa-bars"></i>
        </div>
      </nav>
    `;
  }

  static styles = css`
    * {
      text-decoration: none;
    }
    nav {
      position: fixed;
      width: 100%;
      padding: 20px 0;
      z-index: 998;
      transition: all 0.3s ease;
      font-family: "Ubuntu", sans-serif;
    }

    nav.sticky {
      background: #4070f4;
      padding: 13px 0;
    }

    nav .navbar {
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: auto;
    }

    nav .navbar .logo a {
      font-weight: 500;
      font-size: 35px;
      color: #4070f4;
    }

    nav.sticky .navbar .logo a {
      color: #fff;
    }

    nav .navbar .menu {
      display: flex;
      position: relative;
    }

    nav .navbar .menu li {
      list-style: none;
      margin: 0 20px;
    }

    .navbar .menu a {
      font-size: 18px;
      font-weight: 500;
      color: #0e2431;
      padding: 6px 0;
      transition: all 0.4s ease;
    }

    .navbar .menu a:hover {
      color: #4070f4;
    }

    nav.sticky .menu a {
      color: #fff;
    }

    nav.sticky .menu a:hover {
      color: #0e2431;
    }

    .navbar .media-icons a {
      color: #4070f4;
      font-size: 18px;
      margin: 0 6px;
    }

    nav.sticky .media-icons a {
      color: #fff;
    }

    /* Side Navigation Menu Button CSS */
    nav .menu-btn,
    .navbar .menu .cancel-btn {
      position: absolute;
      color: #fff;
      right: 30px;
      top: 20px;
      font-size: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: none;
    }

    nav .menu-btn {
      color: #4070f4;
    }

    nav.sticky .menu-btn {
      color: #fff;
    }

    .navbar .menu .menu-btn {
      color: #fff;
    }
  `;
}
