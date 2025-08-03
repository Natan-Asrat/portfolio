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
            '/ai/n8n_veo3_video_generator/output_video.png',
            '/ai/n8n_veo3_video_generator/initial.png',
        ],
        portfolioTitle: 'n8n Veo3 Video Generator',
        portfolioDescription: "Scheduled to create AI videos using Veo3, save video file on Google Drive and update Google Sheets about the new video created.",
        portfolioAdditionalInfo: "",
        portfolioExtraDetails: 'No extra details.',
        portfolioCategory: 'n8n | Veo3 | Video Generator | Google Drive | AI',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'August 2025',
        portfolioProjectUrl: 'https://github.com/Natan-Asrat/n8n_ai_video_generator',
        portfolioPageTitle: 'n8n Veo3 Video Generator'
      };
    }
  }
  </script>
