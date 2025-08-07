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
          '/websites/cricket/cric_home.png',
          '/websites/cricket/cric_clicked.png',
          '/websites/cricket/cric_coef.png',
          '/websites/cricket/cric_deposit.png',
          '/websites/cricket/pending_pay.png',
          '/websites/cricket/cric_upi.png',
          '/websites/cricket/manual_dep.png',
          '/websites/cricket/confirm.png',
          '/websites/cricket/verified.png',
          '/websites/cricket/bet_placed.png',
          '/websites/cricket/send_bet.png',
          '/websites/cricket/received.png',
          '/websites/cricket/paypal_dep.png',
          '/websites/cricket/with_paypal.png',
        ],
        portfolioTitle: 'Cricket Betting',
        portfolioDescription: "Betting website targeting India's cricket lovers.",
        portfolioAdditionalInfo: "Payment can be done through UPI for people who don't have credit cards or paypal. Withdrawals are sent either through Paypal or manually with UPI.",
        portfolioExtraDetails: '',
        portfolioCategory: 'Odds APIs | Django Backend | VueJS Website',
        portfolioClient: 'Praveen Toppo - LinkedIn',
        portfolioProjectDate: 'May 2025',
        portfolioProjectUrl: 'https://cricket-bild.onrender.com/',
        portfolioPageTitle: 'Cricket Betting'
      };
    }
  }
  </script>
