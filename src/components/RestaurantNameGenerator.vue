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
            
  '/apps/emishopapp/detail.png',
  '/apps/emishopapp/new.png'
        ],
        portfolioTitle: 'My Awesome Project',
        portfolioDescription: 'This is a detailed description of the project.',
        portfolioAdditionalInfo: 'Additional details about the project.',
        portfolioExtraDetails: 'Extra details if available.',
        portfolioCategory: 'Web Development',
        portfolioClient: 'Awesome Client',
        portfolioProjectDate: 'September 2024',
        portfolioProjectUrl: 'https://example.com',
        portfolioPageTitle: 'Portfolio Details'
      };
    }
  }
  </script>
