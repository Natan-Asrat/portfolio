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
            '/ai/full_stack_rag/running.jpg'
        ],
        portfolioTitle: 'Full Stack RAG',
        portfolioDescription: 'This project showcases a full-stack Retrieval-Augmented Generation (RAG) pipeline using Langchain and Streamlit. The system loads documents, processes them, and generates answers for user queries with integrated logging for showing the process behind the scenes.',
        portfolioAdditionalInfo: "The system processes PDFs, XMLs, CSVs, and ZIP files. It generates document embeddings using a custom HuggingFace embedding model. The pipeline supports multi-query expansion, proposition-based retrieval, and contextual compression, while using ChromaDB for managing the vector store. The project also features a user-friendly Streamlit interface and detailed logging for monitoring.",
        portfolioExtraDetails: 'No extra details.',
        portfolioCategory: 'LangChain | Streamlit | Multi-Query | Proposition-Based Retrieval | Contextual Compression ',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'September 2024',
        portfolioProjectUrl: 'https://full-stack-rag.streamlit.app/',
        portfolioPageTitle: 'Full Stack RAG'
      };
    }
  }
  </script>
