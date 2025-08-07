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
          '/ai/natanai/tgai_home.png',
          '/ai/natanai/tgai_bots.png',
          '/ai/natanai/tgai_posts.png',
          '/ai/natanai/tgai_requests.png',
          '/ai/natanai/tgai_refs.png',
          '/ai/natanai/tgai_billing.png',
          '/ai/natanai/tgai_profile.png',
          '/ai/natanai/tg_ask_ai.png',
          '/ai/natanai/tg_search.png',
        ],
        portfolioTitle: 'Natan AI',
        portfolioDescription: "Turn Your Telegram Bot into an AI Assistant",
        portfolioAdditionalInfo: "Add your bot to a Telegram group to automatically capture new posts into a database. When users chat with the bot, it instantly delivers the most relevant post from the group.",
        portfolioExtraDetails: '',
        portfolioCategory: 'LLM | Telegram API | Django Backend | VueJS Website',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'July 2025',
        portfolioProjectUrl: 'https://natanai.com/',
        portfolioPageTitle: 'Natan AI'
      };
    }
  }
  </script>
