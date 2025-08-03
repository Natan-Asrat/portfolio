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
            '/ai/n8n_customer_support/initial.jpg',
            '/ai/n8n_customer_support/replied.jpg',
        ],
        portfolioTitle: 'n8n Customer Support',
        portfolioDescription: "Classify email as Customer Support or not. Answer questions and reply by retrieving documents from pinecone. Label the email as Customer Support.",
        portfolioAdditionalInfo: "",
        portfolioExtraDetails: 'No extra details.',
        portfolioCategory: 'n8n | Customer Support | Gmail | Pinecone | AI',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'April 2025',
        portfolioProjectUrl: 'https://github.com/Natan-Asrat/n8n_customer_support_emails',
        portfolioPageTitle: 'n8n Customer Support'
      };
    }
  }
  </script>
