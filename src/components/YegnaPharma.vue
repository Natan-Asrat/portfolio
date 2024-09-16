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
  '/desktop/yegna_pharma/list_of_drugs.png',
  '/desktop/yegna_pharma/sales_report.jpg',
  '/desktop/yegna_pharma/add_new_order.jpg',
  '/desktop/yegna_pharma/my_profile.png'
        ],
        portfolioTitle: 'Yegna Pharma',
        portfolioDescription: 'Easily manage and track sales, inventory, and drug listings while monitoring revenue in real time for your Pharmacy.',
        portfolioAdditionalInfo: 'Yegna Pharma is a desktop application designed for managing pharmacy operations. Utilizing an SQLite database, the app allows employees to log in and perform various tasks related to drug inventory and sales. Features include adding drugs to the inventory, tracking stock levels, selling drugs (which automatically updates the inventory), and listing all available drugs. Additionally, the app provides a dashboard for viewing sales reports and revenue, helping pharmacy staff efficiently manage and monitor their operations.',
        portfolioExtraDetails: 'No extra details.',
        portfolioCategory: 'Desktop Java Swing App | SQLite DB | VueJS Website',
        portfolioClient: 'Academic Project',
        portfolioProjectDate: 'July 2023',
        portfolioProjectUrl: 'https://yegna-pharma.onrender.com/',
        portfolioPageTitle: 'Yegna Pharma'
      };
    }
  }
  </script>
