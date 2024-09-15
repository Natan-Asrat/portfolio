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
        portfolioAdditionalInfo: 'Additional details about the project.',
        portfolioExtraDetails: 'Extra details if available.',
        portfolioCategory: 'Android Java | VueJS Website',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'August 2024',
        portfolioProjectUrl: 'https://natville-freshman-tutor.onrender.com/',
        portfolioPageTitle: 'Natville Freshman Tutor'
      };
    }
  }
  </script>
