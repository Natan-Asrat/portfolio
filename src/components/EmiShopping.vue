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
            '/websites/emishopping/home.jpg',
            '/websites/emishopping/new.JPG',
            '/websites/emishopping/order.jpg',
            '/websites/emishopping/chat.jpg',
            '/websites/emishopping/detail.JPG',
            '/websites/emishopping/profile.JPG'
        ],
        portfolioTitle: 'Emi Shopping',
        portfolioDescription: 'Online shopping platform to secure your desired products with just a 1% advance.',
        portfolioAdditionalInfo: 'You can reserve items in advance, reducing the quantity remaining in stock and guaranteeing availability when you need it. Say goodbye to the worry of items being out of stock!',
        portfolioExtraDetails: 'Extra details if available.',
        portfolioCategory: 'VueJS | Django Backend | VitePWA | AWS EC2 | AWS EBS | AWS S3 | Namecheap',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'December 2024',
        portfolioProjectUrl: 'https://www.emishopping.com/',
        portfolioPageTitle: 'Emi Shopping'
      };
    }
  }
  </script>
