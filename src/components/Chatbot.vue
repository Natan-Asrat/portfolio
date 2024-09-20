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
            '/ai/chatbot/chatbot.jpg',
            '/ai/chatbot/langsmith.jpg',
        ],
        portfolioTitle: 'Chatbot',
        portfolioDescription: 'This project uses LangChain and Groq API to build a simple Chatbot and implements tracing using LangSmith.',
        portfolioAdditionalInfo: "Groq is an Open Source LLM.",
        portfolioExtraDetails: 'No extra details.',
        portfolioCategory: 'LangChain | Streamlit ',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'September 2024',
        portfolioProjectUrl: 'https://langchain-groq-chatbot.streamlit.app/',
        portfolioPageTitle: 'Chatbot'
      };
    }
  }
  </script>
