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
import Project1 from './components/Project1.vue';
import NatvilleGrade12Tutor from './components/NatvilleGrade12Tutor.vue';
import NatvilleFreshmanTutor from './components/NatvilleFreshmanTutor.vue';
import YegnaPharma from './components/YegnaPharma.vue';
import RestaurantNameGenerator from './components/RestaurantNameGenerator.vue';
import AudioDetectorApp from './components/AudioDetectorApp.vue';
import EmiShopApp from './components/EmiShopApp.vue';
import LocationCollectorApp from './components/LocationCollectorApp.vue';
import ExcelManagementTool from './components/ExcelManagementTool.vue';
import EmiMusic from './components/EmiMusic.vue';


const routes = [
    {path: '/', component: Home},
    {path: '/natville_g12_tutor', component: NatvilleGrade12Tutor},
    {path: '/natville_freshman_tutor', component: NatvilleFreshmanTutor},
    {path: '/yegna_pharma', component: YegnaPharma},
    {path: '/restaurant_name_generator', component: RestaurantNameGenerator},
    {path: '/audio_detector_and_notifier', component: AudioDetectorApp},
    {path: '/emishopapp', component: EmiShopApp},
    {path: '/location_collector_and_viewer', component: LocationCollectorApp},
    {path: '/excel_management_tool', component: ExcelManagementTool},
    {path: '/emi_music', component: EmiMusic}
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


