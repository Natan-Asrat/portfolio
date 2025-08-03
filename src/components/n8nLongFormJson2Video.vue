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
            '/ai/n8n_long_form_video/initial.png',
            '/ai/n8n_long_form_video/output2.png',
        ],
        portfolioTitle: 'n8n Long Form Video JSON2Video',
        portfolioDescription: "User fills a form to generate a long form video based on topic and tags (single word descriptions), optionally including Intro video and background music.",
        portfolioAdditionalInfo: "",
        portfolioExtraDetails: 'No extra details.',
        portfolioCategory: 'n8n | Long Form Video | JSON2Video | AI',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'July 2025',
        portfolioProjectUrl: 'https://github.com/Natan-Asrat/n8n_long_form_ai_video',
        portfolioPageTitle: 'n8n AI Clone Video'
      };
    }
  }
  </script>
