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
  '/apps/emishopapp/new.png',
  '/apps/emishopapp/profile.png',
  '/apps/emishopapp/saved.png',
  ''
        ],
        portfolioTitle: 'Emi Shop',
        portfolioDescription: 'Discover, shop, and connect with Emi Shop!',
        portfolioAdditionalInfo: 'Additional details about the project.',
        portfolioExtraDetails: 'Extra details if available.',
        portfolioCategory: 'Android Java | Django Backend | VueJS Website',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'August 2023',
        portfolioProjectUrl: 'https://emishopapp.onrender.com/',
        portfolioPageTitle: 'Emi Shop'
      };
    }
  }
  </script>
