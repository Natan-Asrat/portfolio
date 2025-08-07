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
          '/websites/betegna/betegna_explore.png',
          '/websites/betegna/rooms.png',
          '/websites/betegna/look_back.png',
          '/websites/betegna/look_right.png',
        ],
        portfolioTitle: 'Betegna Real Estate',
        portfolioDescription: "A real estate listing platform that simulates real life property visits using a gamified experience with virtual joystick controls.",
        portfolioAdditionalInfo: "Tracks users who click the Call button on a post to accurately record sold properties.",
        portfolioExtraDetails: 'Multiple sellers can be approved to list properties on the site and earn commissions upon sale. If enabled for a post, anyone can click the Promote button (Share → Promote) to earn a commission when a buyer follows their link and clicks the Call button.',
        portfolioCategory: 'Django Backend | VueJS Website',
        portfolioClient: 'Eureka',
        portfolioProjectDate: 'July 2025',
        portfolioProjectUrl: 'https://betegnarealestate.onrender.com/',
        portfolioPageTitle: 'Betegna Real Estate'
      };
    }
  }
  </script>
