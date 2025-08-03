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
            '/ai/n8n_ad_generator/nodes.png',
            '/ai/n8n_ad_generator/form_test.png',
            '/ai/n8n_ad_generator/berchuma.jpg',
            '/ai/n8n_ad_generator/vintage_theme_output.jpg',
            '/ai/n8n_ad_generator/flower_theme_output.jpg',
            '/ai/n8n_ad_generator/scifi_theme_output.jpg',
            '/ai/n8n_ad_generator/tropical_theme_output.jpg',
            '/ai/n8n_ad_generator/luxury_theme_output.jpg',
        ],
        portfolioTitle: 'n8n Ad Generator',
        portfolioDescription: "Receives an image and tagline from user to generate an ad image in the themes provided in google sheets and sends the output to telegram.",
        portfolioAdditionalInfo: "",
        portfolioExtraDetails: 'No extra details.',
        portfolioCategory: 'n8n | Ad Generator | Google Sheets | Telegram | AI',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'August 2025',
        portfolioProjectUrl: 'https://github.com/Natan-Asrat/n8n_ai_ad_generator',
        portfolioPageTitle: 'n8n Ad Generator'
      };
    }
  }
  </script>
