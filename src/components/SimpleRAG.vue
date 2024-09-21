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
            '/ai/simplerag/rag.jpg'
        ],
        portfolioTitle: 'Simple RAG',
        portfolioDescription: 'This project demonstrates a basic Retrieval-Augmented Generation (RAG) system that loads documents from text files, websites, and PDF files. ',
        portfolioAdditionalInfo: "The project involves loading documents using various methods: text files are loaded with TextLoader, web content is retrieved from Wikipedia using WebBaseLoader, and PDF files are loaded with PyPDFLoader. Text documents are then split into 1,000-character chunks with a 200-character overlap using RecursiveCharacterTextSplitter. For embedding, the chunks are tokenized with the sentence-transformers/all-MiniLM-L6-v2 model from HuggingFace. A vector store is implemented with ChromaDB to manage these embeddings. Additionally, a document chain is created using create_stuff_documents_chain and the ChatGroq model to handle user queries and relevant context. Finally, a retrieval chain is built using db.as_retriever() and create_retrieval_chain for effective document retrieval. Groq is an Open Source LLM.",
        portfolioExtraDetails: 'No extra details.',
        portfolioCategory: 'LangChain | Streamlit ',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'September 2024',
        portfolioProjectUrl: 'https://langchain-simple-rag.streamlit.app/',
        portfolioPageTitle: 'Simple RAG'
      };
    }
  }
  </script>
