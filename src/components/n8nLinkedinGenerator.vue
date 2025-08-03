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
            '/ai/n8n_linkedin_post_generator/initial.png',
            '/ai/n8n_linkedin_post_generator/form_test.png',
            '/ai/n8n_linkedin_post_generator/linkedin_post.png',
            '/ai/n8n_linkedin_post_generator/final_sheet.png',
        ],
        portfolioTitle: 'n8n Linkedin Post Generator',
        portfolioDescription: "Receives a topic and target audience to generate a post and image and share it on linkedin as well as saving it to google drive and google sheets.",
        portfolioAdditionalInfo: "",
        portfolioExtraDetails: 'No extra details.',
        portfolioCategory: 'n8n | Linkedin Post Generator | Google Sheets | AI',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'August 2025',
        portfolioProjectUrl: 'https://github.com/Natan-Asrat/n8n_ai_linkedin_post_generator',
        portfolioPageTitle: 'n8n Linkedin Post Generator'
      };
    }
  }
  </script>
