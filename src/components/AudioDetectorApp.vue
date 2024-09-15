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
        portfolioDescription: 'This is a detailed description of the project.',
        portfolioAdditionalInfo: 'Additional details about the project.',
        portfolioExtraDetails: 'No extra details.',
        portfolioCategory: 'Android App with Tensorflow Lite',
        portfolioClient: 'Self',
        portfolioProjectDate: 'August 2024',
        portfolioProjectUrl: 'https://audio-event-detector.vercel.app/',
        portfolioPageTitle: 'Audio Detector and Notifier'
      };
    }
  }
  </script>
