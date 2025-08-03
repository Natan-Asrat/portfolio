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
            '/ai/n8n_hitl_onboarding/nodes.png',
            '/ai/n8n_hitl_onboarding/initial_message.png',
            '/ai/n8n_hitl_onboarding/negative_feedback.png',
            '/ai/n8n_hitl_onboarding/positive_feedback.png',
            '/ai/n8n_hitl_onboarding/final_email.png',
        ],
        portfolioTitle: 'n8n Onboarding Leads Human in the Loop',
        portfolioDescription: "Sends an Onboarding message to new lead in airtable once the admin approves of the message, else it improves the message according to the admin's feedback and asks for approval again.",
        portfolioAdditionalInfo: "",
        portfolioExtraDetails: 'No extra details.',
        portfolioCategory: 'n8n | Human in the Loop | Onboarding | AI',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'August 2025',
        portfolioProjectUrl: 'https://github.com/Natan-Asrat/n8n_onboarding_leads_human_in_the_loop',
        portfolioPageTitle: 'n8n Onboarding Leads Human in the Loop'
      };
    }
  }
  </script>
