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
            
  '/apps/location_collector/new_location_collector_file_mockup.png',
  '/apps/location_collector/save_location_mockup.png',
  '/apps/location_collector/saved_file_mockup.png',
  '/apps/location_collector/visualize_locations_mockup.png',
  '/apps/location_collector/direction_mockup.png'
        ],
        portfolioTitle: 'Location Collector and Viewer',
        portfolioDescription: 'Easily Collect, Save, and Visualize Your Locations!',
        portfolioAdditionalInfo: 'Additional details about the project.',
        portfolioExtraDetails: 'Extra details if available.',
        portfolioCategory: 'Android Java | VueJS Website',
        portfolioClient: 'Eureka',
        portfolioProjectDate: 'September 2024',
        portfolioProjectUrl: 'https://eureka-location-collector.onrender.com/',
        portfolioPageTitle: 'Location Collector and Viewer'
      };
    }
  }
  </script>
