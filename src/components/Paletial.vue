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
          '/websites/paletial/paletial_home.png',
          '/websites/paletial/paletial_explore.png',
          '/websites/paletial/beki.png',
        ],
        portfolioTitle: 'Paletial Real Estate',
        portfolioDescription: "Real Estate listing website for a local real estate agent.",
        portfolioAdditionalInfo: "Logs users who pressed on call button of a post to properly record sold properties.",
        portfolioExtraDetails: 'Multiple sellers can be approved to post on the site and receive commissions when it sells. Anyone can press on promote button on a post (share -> promote, if enabled for the post) to get commission if user follows their link before pressing on Call button.',
        portfolioCategory: 'Django Backend | VueJS Website',
        portfolioClient: 'Eureka',
        portfolioProjectDate: 'April 2025',
        portfolioProjectUrl: 'https://paletial.com/',
        portfolioPageTitle: 'Paletial Real Estate'
      };
    }
  }
  </script>
