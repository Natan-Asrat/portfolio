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
        portfolioDescription: 'Easily Collect, Save, and Visualize Your Locations. With our app, you can quickly collect and save your locations as you move around. Once saved, view them on an interactive map and get instant directions to any location with just a click. This easy-to-use tool turns your location data into helpful insights with minimal effort.',
        portfolioAdditionalInfo: 'Location Collector allows users to save a location instantly with a single click into a new or existing spreadsheet. The app is designed to help users collect and organize locations of shops, retailers, or other points of interest. These locations, along with details such as the outlet name and phone number, are saved in a spreadsheet that can be easily shared with others. The data is then accessible through the Location Viewer, which displays the spreadsheet as a map. Users can click on any location to get directions, providing a seamless way to navigate to saved locations.',
        portfolioExtraDetails: 'No extra details.',
        portfolioCategory: 'Android Java | VueJS Website',
        portfolioClient: 'Eureka',
        portfolioProjectDate: 'September 2024',
        portfolioProjectUrl: 'https://eureka-location-collector.onrender.com/',
        portfolioPageTitle: 'Location Collector and Viewer'
      };
    }
  }
  </script>
