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
            
  '/desktop/excel_management/excel_mgt_home.jpg',
  '/desktop/excel_management/excel_mgt_new.jpg',
  '/desktop/excel_management/excel_mgt_search.jpg" title="Excel Management Tool" data-gallery="portfolio-gallery-desktop'
        ],
        portfolioTitle: 'Excel Management Tool',
        portfolioDescription: 'Our Excel Management Tool allows you to index your spreadsheets by any specific column, such as names, and store both the values and files in an easily searchable database.<br> Instantly find the exact file you need, along with its folder structure, with just a few clicks.',
        portfolioAdditionalInfo: 'Additional details about the project.',
        portfolioExtraDetails: 'Extra details if available.',
        portfolioCategory: 'Desktop Java Swing App | SQLite DB | VueJS Website',
        portfolioClient: 'Eureka',
        portfolioProjectDate: 'July 2024',
        portfolioProjectUrl: 'https://eureka-excel-management-tool-web.onrender.com/',
        portfolioPageTitle: 'Excel Management Tool'
      };
    }
  }
  </script>
