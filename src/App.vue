<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref,  } from 'vue';

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
      { id: 'contact', title: 'Contact'}
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
  <nav :class="{'sticky': isSticky}">
    <div class="navbar" :class="{'active': isMenuActive}">
      <div class="logo"><a href="#">Portfolio.</a></div>
      <ul class="menu">
        <li v-for="section in sections" :key="section.id" >
           <a :href="'#' + section.id" :class="{'active': activeLink === section.id}">{{ section.title }}</a>
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
        <div class="text-one">Hello,</div>
        <div class="text-two">I'm Srinivas Dasari</div>
        <div class="text-three">Frontend Engineer</div>
      </div>
      <div class="button">
        <button>Hire Me</button>
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
        

As a highly skilled and passionate Lead Frontend Engineer with over 9+ years of experience, I specialize in designing and developing dynamic user interfaces for complex web applications. I have deep expertise in modern frameworks like Vue.js, React.js, and Angular, along with advanced proficiency in HTML5, CSS/SCSS, and JavaScript libraries such as D3.js and Chart.js for creating interactive, data-driven visualizations.
<br/><br/>
My experience extends to integrating APIs, building real-time dashboards, and optimizing user experiences across multiple platforms. I take pride in delivering scalable, high-performance solutions that meet both user needs and business goals. A strong communicator and collaborative team player, I excel at working with cross-functional teams to craft intuitive, user-centric applications that drive success.
          </p>
          <div class="button">
            <button>Download CV</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- My Skill Section Start -->
  <!-- Section Tag and Other Div will same where we need to put same CSS -->
  <section class="skills" id="skills">
    <div class="content">
      <div class="title"><span>My Skills</span></div>
      <div class="skills-details">
        <div class="text">
          <div class="topic">Skills Reflects Our Knowledge</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus natus tenetur tempora? Quasi, rem quas
            omnis. Porro rem aspernatur reiciendis ut praesentium minima ad, quos, officia! Illo libero, et, distinctio
            repellat sed nesciunt est modi quaerat placeat. Quod molestiae, alias?</p>
          <div class="experience">
            <div class="num">10</div>
            <div class="exp">
              Years Of <br />
              Experience
            </div>
          </div>
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
            <div class="topic">PHP</div>
            <div class="per">60%</div>
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
          <div class="topic">Web Devlopment</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem
            eligendi?</p>
        </div>
        <div class="box">
          <div class="icon">
            <i class="fas fa-paint-brush"></i>
          </div>
          <div class="topic">Graphic Design</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem
            eligendi?</p>
        </div>
        <div class="box">
          <div class="icon">
            <i class="fas fa-chart-line"></i>
          </div>
          <div class="topic">Digital Marketing</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem
            eligendi?</p>
        </div>
        <div class="box">
          <div class="icon">
            <i class="fab fa-android"></i>
          </div>
          <div class="topic">Icon Design</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem
            eligendi?</p>
        </div>
        <div class="box">
          <div class="icon">
            <i class="fas fa-camera-retro"></i>
          </div>
          <div class="topic">Photography</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem
            eligendi?</p>
        </div>
        <div class="box">
          <div class="icon">
            <i class="fas fa-tablet-alt"></i>
          </div>
          <div class="topic">Apps Devlopment</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem
            eligendi?</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Me section Start -->
  <section class="contact" id="contact">
    <div class="content">
      <div class="title"><span>Contact Me</span></div>
      <div class="text">
        <div class="topic">Have Any Project?</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam neque ipsum corrupti dolores, facere numquam
          voluptate aspernatur sit perferendis qui nisi modi! Recusandae deserunt consequatur voluptatibus alias
          repellendus nobis eligendi.</p>
        <div class="button">
          <button>Let's Chat</button>
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

