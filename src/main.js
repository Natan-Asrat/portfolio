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
import NatvilleGrade12Tutor from './components/NatvilleGrade12Tutor.vue';
import NatvilleFreshmanTutor from './components/NatvilleFreshmanTutor.vue';
import YegnaPharma from './components/YegnaPharma.vue';
import RestaurantNameGenerator from './components/RestaurantNameGenerator.vue';
import AudioDetectorApp from './components/AudioDetectorApp.vue';
import EmiShopApp from './components/EmiShopApp.vue';
import EmiShopping from './components/EmiShopping.vue';
import LocationCollectorApp from './components/LocationCollectorApp.vue';
import ExcelManagementTool from './components/ExcelManagementTool.vue';
import EmiMusic from './components/EmiMusic.vue';
import Chatbot from './components/Chatbot.vue';
import EssayWritter from './components/EssayWritter.vue';
import SimpleRAG from './components/SimpleRAG.vue';
import FullStackRAG from './components/FullStackRAG.vue';
import n8nVapiMcp from './components/n8nVapiMcp.vue';
import n8nOnboardingHitl from './components/n8nOnboardingHitl.vue';
import n8nAiClone from './components/n8nAiClone.vue';
import n8nLongFormJson2Video from './components/n8nLongFormJson2Video.vue';
import n8nAdGenerator from './components/n8nAdGenerator.vue';
import n8nVeo3VideoGenerator from './components/n8nVeo3VideoGenerator.vue';
import n8nLinkedinGenerator from './components/n8nLinkedinGenerator.vue';
import n8nDailyNews from './components/n8nDailyNews.vue';
import n8nCustomerSupport from './components/n8nCustomerSupport.vue';

const routes = [
    {path: '/', component: Home},
    {path: '/n8n_vapi_mcp', component: n8nVapiMcp},
    {path: '/n8n_hitl_onboarding', component: n8nOnboardingHitl},
    {path: '/n8n_ai_clone', component: n8nAiClone},
    {path: '/n8n_long_form_video', component: n8nLongFormJson2Video},
    {path: '/n8n_ad_generator', component: n8nAdGenerator},
    {path: '/n8n_veo3_video_generator', component: n8nVeo3VideoGenerator},
    {path: '/n8n_linkedin_post_generator', component: n8nLinkedinGenerator},
    {path: '/n8n_daily_news', component: n8nDailyNews},
    {path: '/n8n_customer_support', component: n8nCustomerSupport},
    {path: '/natville_g12_tutor', component: NatvilleGrade12Tutor},
    {path: '/natville_freshman_tutor', component: NatvilleFreshmanTutor},
    {path: '/yegna_pharma', component: YegnaPharma},
    {path: '/restaurant_name_generator', component: RestaurantNameGenerator},
    {path: '/audio_detector_and_notifier', component: AudioDetectorApp},
    {path: '/emishopapp', component: EmiShopApp},
    {path: '/emishopping', component: EmiShopping},
    {path: '/location_collector_and_viewer', component: LocationCollectorApp},
    {path: '/excel_management_tool', component: ExcelManagementTool},
    {path: '/emi_music', component: EmiMusic},
    {path: '/chatbot', component: Chatbot},
    {path: '/essay-writter', component: EssayWritter},
    {path: '/simplerag', component: SimpleRAG},
    {path: '/full_stack_rag', component: FullStackRAG}
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


