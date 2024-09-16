<template>
    <main class="portfolio-details-page">
      <!-- Page Title -->
      <div class="page-title" data-aos="fade">
        <div class="container">
          <nav class="breadcrumbs">
            <ol>
              <li><a href="/">Home</a></li>
              <li class="current">{{ pageTitle }}</li>
            </ol>
          </nav>
          <h1>{{ pageTitle }}</h1>
        </div>
      </div><!-- End Page Title -->
  
      <!-- Portfolio Details Section -->
      <section id="portfolio-details" class="portfolio-details section">
        <div class="container" data-aos="fade-up">
          <!-- Portfolio Details Slider -->
          <div class="portfolio-details-slider swiper" ref="swiperContainer">
            <div class="swiper-wrapper align-items-center">
              <div v-for="(image, index) in images" :key="index" class="swiper-slide">
                <img :src="image" alt="" class="swiper-slide-image">
              </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-pagination"></div>
          </div>
  
          <div class="row justify-content-between gy-4 mt-4">
            <!-- Portfolio Description -->
            <div class="col-lg-8" data-aos="fade-up">
              <div class="portfolio-description">
                <h2>{{ title }}</h2>
                <p>{{ description }}</p>
                <p>{{ additionalInfo }}</p>
                <p v-if="extraDetails">{{ extraDetails }}</p>
              </div>
            </div>
  
            <!-- Portfolio Info -->
            <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div class="portfolio-info">
                <h3>Project Information</h3>
                <ul>
                  <li><strong>Category</strong> {{ category }}</li>
                  <li><strong>Client</strong> {{ client }}</li>
                  <li><strong>Project Date</strong> {{ projectDate }}</li>
                  <li><strong>Project URL</strong> <a :href="projectUrl" target="_blank">{{ projectUrl }}</a></li>
                  <li><a :href="projectUrl" class="btn-visit align-self-start" target="_blank">Visit Website</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section><!-- /Portfolio Details Section -->
    </main>
  </template>
  <script>
   import { onMounted, ref } from 'vue';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import Swiper from 'swiper';
import AOS from 'aos';
import Typed from 'typed.js';
import PureCounter from '@srexi/purecounterjs';
import GLightbox from 'glightbox';

  export default {
    name: 'PortfolioDetails',
    props: {
    images: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    additionalInfo: {
      type: String,
      default: ''
    },
    extraDetails: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      required: true
    },
    client: {
      type: String,
      required: true
    },
    projectDate: {
      type: String,
      required: true
    },
    projectUrl: {
      type: String,
      required: true
    },
    pageTitle: {
      type: String,
      required: true
    }
  },
  setup() {
    const scrollTop = ref(null);

    onMounted(() => {
      // Header Toggle
      const headerToggleBtn = document.querySelector('.header-toggle');
      const header = document.querySelector('#header');
      
      function headerToggle() {
        header.classList.toggle('header-show');
        headerToggleBtn.classList.toggle('bi-list');
        headerToggleBtn.classList.toggle('bi-x');
      }
      headerToggleBtn.addEventListener('click', headerToggle);

      // Hide Mobile Nav on Same-Page/Hash Links
      document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.addEventListener('click', () => {
          if (header.classList.contains('header-show')) {
            headerToggle();
          }
        });
      });

      // Toggle Mobile Nav Dropdowns
      document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
        navmenu.addEventListener('click', function(e) {
          e.preventDefault();
          this.parentNode.classList.toggle('active');
          this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
          e.stopImmediatePropagation();
        });
      });

      // Preloader
      const preloader = document.querySelector('#preloader');
      if (preloader) {
        window.addEventListener('load', () => {
          preloader.remove();
        });
      }

      // Scroll Top Button
      function toggleScrollTop() {
        if (scrollTop.value) {
          window.scrollY > 100 ? scrollTop.value.classList.add('active') : scrollTop.value.classList.remove('active');
        }
      }
      window.addEventListener('load', toggleScrollTop);
      document.addEventListener('scroll', toggleScrollTop);
      
      scrollTop.value?.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      // Animation on Scroll
      function aosInit() {
        AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: false,
          mirror: false
        });
      }
      window.addEventListener('load', aosInit);

      // Init Typed.js
      const selectTyped = document.querySelector('.typed');
      if (selectTyped) {
        const typedStrings = selectTyped.getAttribute('data-typed-items').split(',');
        new Typed('.typed', {
          strings: typedStrings,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000
        });
      }

      // Initiate Pure Counter
      new PureCounter();

      // Animate Skills Items on Reveal
      document.querySelectorAll('.skills-animation').forEach((item) => {
        new Waypoint({
          element: item,
          offset: '80%',
          handler: function(direction) {
            item.querySelectorAll('.progress .progress-bar').forEach(el => {
              el.style.width = el.getAttribute('aria-valuenow') + '%';
            });
          }
        });
      });

      // Initiate GLightbox
      GLightbox({ selector: '.glightbox' });

      // Isotope Layout and Filters Initialization
      document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
        const layout = isotopeItem.getAttribute('data-layout') || 'masonry';
        const filter = isotopeItem.getAttribute('data-default-filter') || '*';
        const sort = isotopeItem.getAttribute('data-sort') || 'original-order';

        let initIsotope;
        imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
          initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
            itemSelector: '.isotope-item',
            layoutMode: layout,
            filter: filter,
            sortBy: sort
          });
        });

        isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
          filters.addEventListener('click', function() {
            isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
            initIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
            if (typeof aosInit === 'function') {
              aosInit();
            }
          }, false);
        });
      });

      // Swiper Slider Initialization
      function initSwiper() {
  document.querySelectorAll(".portfolio-details-slider.swiper").forEach(function(swiperElement) {
    const swiper = new Swiper(swiperElement, {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
}

      window.addEventListener("load", initSwiper);

      // Correct Scrolling Position for Hash Links
      window.addEventListener('load', function(e) {
        if (window.location.hash) {
          const section = document.querySelector(window.location.hash);
          if (section) {
            setTimeout(() => {
              const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
              window.scrollTo({
                top: section.offsetTop - parseInt(scrollMarginTop),
                behavior: 'smooth'
              });
            }, 100);
          }
        }
      });

      // Navmenu Scrollspy
      function navmenuScrollspy() {
        document.querySelectorAll('.navmenu a').forEach(navmenulink => {
          if (!navmenulink.hash) return;
          const section = document.querySelector(navmenulink.hash);
          if (!section) return;
          const position = window.scrollY + 200;
          if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
            navmenulink.classList.add('active');
          } else {
            navmenulink.classList.remove('active');
          }
        });
      }
      window.addEventListener('load', navmenuScrollspy);
      document.addEventListener('scroll', navmenuScrollspy);
    });

    return {
      scrollTop
    };
  }
  }
  </script>
  
  <style scoped>
  /* Styles for the Swiper component */
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-slide-image {
    max-height: 500px; /* Adjust the maximum height as needed */
    width: auto; /* Ensure the image width is 100% of the container */
  object-fit: contain; /* Fit the image within the container without cropping */ /* Ensures that the image covers the area without distortion */
  }
  </style>