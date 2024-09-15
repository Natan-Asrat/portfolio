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
            
  '/desktop/yegna_pharma/dashboard_profile.jpg',
  '/desktop/yegna_pharma/Inventory.jpg',
  '/desktop/yegna_pharma/list_of_drugs.pn',
  '/desktop/yegna_pharma/sales_report.jpg',
  '/desktop/yegna_pharma/add_new_order.jpg',
  '/desktop/yegna_pharma/my_profile.png'
        ],
        portfolioTitle: 'Yegna Pharma',
        portfolioDescription: 'Easily manage and track sales, inventory, and drug listings while monitoring revenue in real time for your Pharmacy.',
        portfolioAdditionalInfo: 'Additional details about the project.',
        portfolioExtraDetails: 'Extra details if available.',
        portfolioCategory: 'Desktop Java Swing App | SQLite DB | VueJS Website',
        portfolioClient: 'Academic Project',
        portfolioProjectDate: 'July 2023',
        portfolioProjectUrl: 'https://yegna-pharma.onrender.com/',
        portfolioPageTitle: 'Yegna Pharma'
      };
    }
  }
  </script>
