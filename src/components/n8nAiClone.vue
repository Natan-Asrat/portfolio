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
            '/ai/n8n_ai_clone/copy_avatar.png',
            '/ai/n8n_ai_clone/nodes.png',
            '/ai/n8n_ai_clone/output.png',
        ],
        portfolioTitle: 'n8n AI Clone Video',
        portfolioDescription: "User gives a short description of what the video will be about and AI will generate a script and create a video where the clone of the user is talking about the topic.",
        portfolioAdditionalInfo: "",
        portfolioExtraDetails: 'No extra details.',
        portfolioCategory: 'n8n | AI Clone | HeyGen | AI',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'July 2025',
        portfolioProjectUrl: 'https://github.com/Natan-Asrat/n8n_ai_clone_video',
        portfolioPageTitle: 'n8n AI Clone Video'
      };
    }
  }
  </script>
