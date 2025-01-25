<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, } from 'vue';

const isSticky = ref(false);
const showScrollBtn = ref(false);
const isMenuActive = ref(false);
const body = document.querySelector('body') as HTMLBodyElement;
const scrollBtnRef = ref<HTMLElement | null>(null)
const activeLink = ref<string | null>(null);

const sections = ref([
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'services', title: 'Services' },
  { id: 'contact', title: 'Contact' }
]);


const navHighlighter = () => {
  // Get current scroll position
  const scrollY = window.pageYOffset;

  sections.value.forEach((section) => {
    const sectionElement = document.getElementById(section.id);
    if (sectionElement) {
      const sectionHeight = sectionElement.offsetHeight;
      const sectionTop = sectionElement.offsetTop - 50;

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        activeLink.value = section.id;
      }
    }
  });
};
const handleScroll = () => {
  // navHighlighter();
  if (document.documentElement.scrollTop > 250) {
    isSticky.value = true;
    showScrollBtn.value = true;
  } else {
    isSticky.value = false;
    showScrollBtn.value = false;
  }
};

const openNavMenu = () => {
  isMenuActive.value = true;
  body.style.overflow = 'hidden';
  if (scrollBtnRef.value) scrollBtnRef.value.style.pointerEvents = 'none';
};

// Close side menu
const hideNavMenu = () => {
  isMenuActive.value = false;
  body.style.overflow = 'auto';
  if (scrollBtnRef.value) scrollBtnRef.value.style.pointerEvents = 'auto';
};

// Watch for the scroll event on mount and unmount
onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  window.addEventListener('scroll', navHighlighter);
  nextTick(() => {
    // Ensure highlighting works after the DOM is fully loaded
    navHighlighter();
  });

});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('scroll', navHighlighter);
});


</script>

<template>
  <div>
    <!-- Move to up button -->
    <div class="scroll-button" v-show="showScrollBtn">
      <a href="#home" ref="scrollBtnRef"><i class="fas fa-arrow-up"></i></a>
    </div>
    <!-- navgaition menu -->
    <nav :class="{ 'sticky': isSticky }">
      <div class="navbar" :class="{ 'active': isMenuActive }">
        <div class="logo"><a href="#">Portfolio.</a></div>
        <ul class="menu">
          <li v-for="section in sections" :key="section.id">
            <a @click="hideNavMenu" :href="'#' + section.id" :class="{ 'active': activeLink === section.id }">{{
              section.title }}</a>
          </li>

          <div class="cancel-btn" @click="hideNavMenu">
            <i class="fas fa-times"></i>
          </div>
        </ul>
      </div>
      <div class="menu-btn" @click="openNavMenu">
        <i class="fas fa-bars"></i>
      </div>
    </nav>

    <!-- Home Section Start -->
    <section class="home" id="home">
      <div class="home-content">
        <div class="text">
          <div class="text-one">Hey there!, I'm-</div>
          <div class="text-two">Srinivas Dasari</div>
          <div class="text-three">Senior Frontend Engineer</div>
          <div class="text-four">A self-taught developer with an
            interest in Computer Science.</div>
          <div class="text-five">Presently focusing on front-end development and deployment of web applications and
            responsive websites</div>
        </div>
        <div class="button">
          <a href="https://github.com/dasari234" target="_blank">
            <button> <svg viewBox="0 0 496 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                </path>
              </svg> <span>Github</span></button>
          </a>

          <a href="https://www.linkedin.com/in/srinivas-dasari-3a7aa120/" target="_blank">
            <button> <svg viewBox="0 0 448 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                </path>
              </svg> <span>Linkedin</span></button>
          </a>

          <a href="mailto:dasari9@gmail.com">

            <button><svg viewBox="0 0 512 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                </path>
              </svg> <span>Mail</span></button>
          </a>


        </div>
      </div>
    </section>

    <!-- About Section Start -->
    <section class="about" id="about">
      <div class="content">
        <div class="title"><span>About Me</span></div>
        <div class="about-details">
          <div class="left">
            <img src="./assets/about.jpg" alt="" />
          </div>
          <div class="right">
            <div class="topic">I'm passionate about developing web apps.</div>
            <p>
              As a highly skilled and passionate Lead Frontend Engineer with over 9+ years of experience, I specialize
              in designing and developing dynamic user interfaces for complex web applications. I have deep expertise in
              modern frameworks like Vue.js, React.js, and Angular, along with advanced proficiency in HTML5, CSS/SCSS,
              and JavaScript libraries such as D3.js and Chart.js for creating interactive, data-driven visualizations.
              <br /><br />
              My experience extends to integrating APIs, building real-time dashboards, and optimizing user experiences
              across multiple platforms. I take pride in delivering scalable, high-performance solutions that meet both
              user needs and business goals. A strong communicator and collaborative team player, I excel at working
              with cross-functional teams to craft intuitive, user-centric applications that drive success.
            </p>
            <div class="button">
              <a href="/Srinivas_L.pdf" target="_blank">
                <button><svg viewBox="0 0 384 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z">
                    </path>
                  </svg> Download CV</button>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- My Skill Section Start -->
    <section class="skills" id="skills">
      <div class="content">
        <div class="title"><span>My Skills</span></div>
        <div class="skills-details">
          <div class="text">
            <div class="topic">Skills Reflects Our Knowledge</div>
            <p>Front-end technical skills are essential for creating the visible parts of a website or web application
              that users interact with. These skills range from basic languages to advanced tools and frameworks that
              help developers build functional, efficient, and visually appealing user interfaces.</p>
            <!-- <div class="experience">
              <div class="num">9</div>
              <div class="exp">
                Years Of <br />
                Experience
              </div>
            </div> -->
          </div>
          <div class="boxes">
            <div class="box">
              <div class="topic">HTML</div>
              <div class="per">90%</div>
            </div>
            <div class="box">
              <div class="topic">CSS</div>
              <div class="per">80%</div>
            </div>
            <div class="box">
              <div class="topic">JavScript</div>
              <div class="per">70%</div>
            </div>
            <div class="box">
              <div class="topic">VueJS</div>
              <div class="per">80%</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- My Services Section Start -->
    <section class="services" id="services">
      <div class="content">
        <div class="title"><span>My Services</span></div>
        <div class="boxes">
          <div class="box">
            <div class="icon">
              <i class="fas fa-desktop"></i>
            </div>
            <div class="topic">Web Development</div>
            <p>Web design encompasses many different skills and disciplines in the production and maintenance of
              websites. The different areas of web design include web graphic design user interface design authoring,
              including standardised code and proprietary software user experience design and search engine</p>
          </div>
          <div class="box">
            <div class="icon">
              <i class="fas fa-paint-brush"></i>
            </div>
            <div class="topic">Backend Development</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem
              eligendi?</p>
          </div>

          <div class="box">
            <div class="icon">
              <i class="fas fa-tablet-alt"></i>
            </div>
            <div class="topic">Apps Development</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem
              eligendi?</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Me section Start -->
    <section class="contact" id="contact">
      <div class="content">
        <div class="title"><span>Keep In Touch.</span></div>
        <div class="text">
          <div class="topic">Have Any Project?</div>
          <p>I'm currently specializing in Front-end Engineer. <br />
            Feel free to get in touch and talk more about your projects.</p>
          <div class="button" style="justify-content: center;">
            <a href="https://github.com/dasari234" target="_blank">
              <button> <svg viewBox="0 0 496 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                  </path>
                </svg> <span>Github</span></button>
            </a>

            <a href="https://www.linkedin.com/in/srinivas-dasari-3a7aa120/" target="_blank">
              <button> <svg viewBox="0 0 448 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                  </path>
                </svg> <span>Linkedin</span></button>
            </a>

            <a href="mailto:dasari9@gmail.com">

              <button><svg viewBox="0 0 512 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                  </path>
                </svg> <span>Mail</span></button>
            </a>


          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section Start -->
    <footer>
      <div class="text">
        <span>&#169; 2021 All Rights Reserved</span>
      </div>
    </footer>

  </div>
</template>
