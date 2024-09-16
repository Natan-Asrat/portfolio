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
        portfolioAdditionalInfo: 'The Restaurant Name Generator leverages few-shot prompting with two custom prompt templates to generate creative restaurant names based on a specific cuisine, such as Ethiopian. After generating a suitable restaurant name, the system then produces a corresponding list of menu items that could be served at the restaurant. This tool is designed to help entrepreneurs or enthusiasts quickly brainstorm unique names and menu ideas for various types of restaurants.',
        portfolioExtraDetails: 'No extra details.',
        portfolioCategory: 'Langchain | Streamlit | Groq API',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'June 2024',
        portfolioProjectUrl: 'https://github.com/Natan-Asrat/langchain-restaurant-name-generator',
        portfolioPageTitle: 'Restaurant Name Generator'
      };
    }
  }
  </script>
