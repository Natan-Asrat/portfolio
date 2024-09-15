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
            
  '/apps/natville_g12/physics_list_mockup.png',
  '/apps/natville_g12/electronics_mockup.png',
  '/apps/natville_g12/electromagnetism_mockup.png',
  '/apps/natville_g12/applications_mockup.png',
  ''
        ],
        portfolioTitle: 'Natville Grade 12 Physics',
        portfolioDescription: 'I’m here to help grade 12 students with my Physics course!',
        portfolioAdditionalInfo: 'Additional details about the project.',
        portfolioExtraDetails: 'Extra details if available.',
        portfolioCategory: 'Android Java | VueJS Website',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'August 2024',
        portfolioProjectUrl: 'https://natville-grade-12-tutor.vercel.app/',
        portfolioPageTitle: 'Natville Grade 12 Physics'
      };
    }
  }
  </script>
