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
            
  '/apps/natville_freshman/choose_playlist_mockup.png',
  '/apps/natville_freshman/logic_mockup.png',
  '/apps/natville_freshman/maths_mockup.png',
  '/apps/natville_freshman/playing_mockup.png'
        ],
        portfolioTitle: 'Natville Freshman Tutor',
        portfolioDescription: 'I have covered Logic and Critical Thinking, Psychology, and Applied Mathematics One in my tutorials.',
        portfolioAdditionalInfo: 'Natville Freshman Tutor is an educational app that features three of my tutorial playlists, originally published on YouTube: Logic and Critical Thinking, Applied Mathematics I, and Psychology. The app distributes these tutorials, with the first video in each playlist available for free to users. To access the remaining videos, users are required to subscribe by sending an activation key. The app is designed to provide a structured learning experience while monetizing the content by gating full access behind a subscription.',
        portfolioExtraDetails: 'No extra details.',
        portfolioCategory: 'Android Java | VueJS Website',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'August 2024',
        portfolioProjectUrl: 'https://natville-freshman-tutor.onrender.com/',
        portfolioPageTitle: 'Natville Freshman Tutor'
      };
    }
  }
  </script>
