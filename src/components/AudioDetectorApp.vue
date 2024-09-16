<template>
    <div>
      <!-- Other components or content -->
  
      <!-- Use the PortfolioDetails component -->
      <PortfolioDetails
        :images="portfolioImages"
        :title="portfolioTitle"
        :description="portfolioDescription"
        :additionalInfo="portfolioAdditionalInfo"
        :extraDetails="portfolioExtraDetails"
        :category="portfolioCategory"
        :client="portfolioClient"
        :projectDate="portfolioProjectDate"
        :projectUrl="portfolioProjectUrl"
        :pageTitle="portfolioPageTitle"
      />
    </div>
  </template>
  
  <script>
  import PortfolioDetails from './PortfolioDetails.vue';
  
  export default {
    components: {
      PortfolioDetails
    },
    data() {
      return {
        // Sample data, replace with your actual data
        portfolioImages: [
            '/apps/audio_detector/audio_detector_working_mockup.png',
            '/apps/audio_detector/audio_detector_settings_mockup.png',
            '/apps/audio_detector/audio_detector_settings_filled_mockup.png',
            '/apps/audio_detector/events_viewer_list_mockup.png',
            '/apps/audio_detector/events_viewer_map_mockup.png',
            '/apps/audio_detector/events_viewer_direction_mockup.png'
        ],
        portfolioTitle: 'Audio Detector and Notifier',
        portfolioDescription: 'Introducing Audio Event Detector and Notifier App, the smart app that listens to your surroundings 24/7 and alerts you instantly when specific sounds are detected. Choose from 521 sound types, and when your selected trigger sounds are heard, the app sends you SMS alerts with location data and can even make calls.Paired with another app, Events SMS Alert Viewer, you can see your alert history, read SMS alerts, and view the locations on a map with directions. Stay informed and in control, no matter where you are.',
        portfolioAdditionalInfo: "This project includes an audio event detector that functions as a background service. It constantly uses inference on the YAMNet model with TensorFlow Lite to classify audio into 521 distinct categories. The app allows users to configure specific trigger events, such as crying or gunfire, which will automatically send an SMS to saved contacts. Additionally, the app can make a phone call to the first saved contact and send the device's location if enabled. This location-based system is designed to help build a network of devices planted in various areas to detect specific sounds and notify intelligence or military services for real-time response.",
        portfolioExtraDetails: 'No extra details.',
        portfolioCategory: 'Android Java | Tensorflow Lite YamNet Model | VueJS Website',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'August 2024',
        portfolioProjectUrl: 'https://audio-event-detector.vercel.app/',
        portfolioPageTitle: 'Audio Detector and Notifier'
      };
    }
  }
  </script>
