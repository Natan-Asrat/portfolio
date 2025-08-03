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
            '/ai/n8n_daily_news/documentation.png',
            '/ai/n8n_daily_news/newsapi_doc.png',
            '/ai/n8n_daily_news/final.png',
            '/ai/n8n_daily_news/sent.png',
        ],
        portfolioTitle: 'n8n Daily News',
        portfolioDescription: "Scheduled to send you daily news at 10 AM through Telegram.",
        portfolioAdditionalInfo: "",
        portfolioExtraDetails: 'No extra details.',
        portfolioCategory: 'n8n | News Summarizer | Telegram | GNews | NewsApi | AI',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'August 2025',
        portfolioProjectUrl: 'https://github.com/Natan-Asrat/n8n_news_summarizer',
        portfolioPageTitle: 'n8n Daily News'
      };
    }
  }
  </script>
