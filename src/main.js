import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './components/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';

// import 'aos/dist/aos.js';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS
// AOS.init();

import Typed from 'typed.js';
import '@srexi/purecounterjs/dist/purecounter_vanilla.js'
// import PureCounter from '@srexi/purecounterjs';
// new PureCounter(); // Initialize PureCounter

// Importing Waypoints (No framework version)
import 'waypoints/lib/noframework.waypoints.js';

// Importing GLightbox
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
const lightbox = GLightbox();

// Importing ImagesLoaded
import imagesLoaded from 'imagesloaded';

// Importing Isotope
import Isotope from 'isotope-layout';
import 'swiper/swiper-bundle.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.min.css';

import Swiper from 'swiper';


const routes = [
    {path: '/', component: Home}
]

const router = createRouter(
    {
        'history': createWebHistory(),
        routes
    }
)



const app = createApp(App)
app.use(router)
app.mount('#app')


