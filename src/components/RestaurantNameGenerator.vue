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
            
  '/ai/restaurant_name_generator/screenshot.jpg',
        ],
        portfolioTitle: 'Restaurant Name Generator',
        portfolioDescription: 'This project uses LangChain to generate restaurant names and menu items based on selected cuisines. It utilizes a language model and sequential chaining to provide restaurant-related outputs.',
        portfolioAdditionalInfo: 'Additional details about the project.',
        portfolioExtraDetails: 'Extra details if available.',
        portfolioCategory: 'Langchain | Streamlit | Groq API',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'June 2024',
        portfolioProjectUrl: 'https://github.com/Natan-Asrat/langchain-restaurant-name-generator',
        portfolioPageTitle: 'Restaurant Name Generator'
      };
    }
  }
  </script>
