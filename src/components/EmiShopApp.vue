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
        portfolioDescription: 'Discover, shop, and connect with Emi Shop! Our app combines the best of social media with the convenience of online shopping, creating a unique and engaging shopping experience.',
        portfolioAdditionalInfo: 'This recommendation system integrates six different recommenders that work together to personalize user experiences. It includes three collaborative filtering algorithms (user-user, item-item, and user-category), with a total of 775 lines of Python code. The system tracks user interactions such as likes, calls to sellers, and view details, allowing it to customize the feed and ads based on collaborative filtering. Users can follow others, and posts can be boosted by purchasing coins. Additionally, the backend features 46 API endpoints and 18 database models, supporting complex database queries to deliver a personalized feed. The front end consists of 34 different layouts, infinite scroll functionality, skeleton views during loading, and both dark and light themes for a seamless user experience.',
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
