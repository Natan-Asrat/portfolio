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
            
  '/desktop/emi_music/emimusic_playing.jpg',
  '/desktop/emi_music/emimusic_recent.jpg',
  '/desktop/emi_music/emimusic_add_playlist.jpg',
  '/desktop/emi_music/emimusic_add_music.jpg',
  ''
        ],
        portfolioTitle: 'Emi Music',
        portfolioDescription: 'Discover, play, and enjoy your favorite tunes effortlessly with our music player app.',
        portfolioAdditionalInfo: 'Additional details about the project.',
        portfolioExtraDetails: 'Extra details if available.',
        portfolioCategory: 'Desktop Java Swing App | SQLite DB | VueJS Website',
        portfolioClient: 'Academic Project',
        portfolioProjectDate: 'January 2024',
        portfolioProjectUrl: 'https://emi-music-web.onrender.com/',
        portfolioPageTitle: 'Emi Music'
      };
    }
  }
  </script>
