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
            '/ai/essay/streamlit.jpg',
            '/ai/essay/api.jpg',
        ],
        portfolioTitle: 'Essay Writter',
        portfolioDescription: 'This project uses langchain with Groq LLM and Langserve to implement a simple API from which a Streamlit client requests to get an essay written on a specific topic provided by the user.',
        portfolioAdditionalInfo: "Groq is an Open Source LLM.",
        portfolioExtraDetails: 'No extra details.',
        portfolioCategory: 'LangChain | Streamlit ',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'September 2024',
        portfolioProjectUrl: 'https://langserve-essay-writter.streamlit.app/',
        portfolioPageTitle: 'Essay Writter'
      };
    }
  }
  </script>
