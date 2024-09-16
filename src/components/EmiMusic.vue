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
        portfolioDescription: 'Discover, play, and enjoy your favorite tunes effortlessly with our music player app. Easily find songs in your music folder, pick up right where you left off with recent plays, and create personalized playlists to suit every mood. Your music, your way.',
        portfolioAdditionalInfo: "Emi Music is a music management application that automatically scans the user's 'Music' folder and imports all available MP3 files into a database. The app presents the imported music as a list, and users can click on any track to play it directly within the app. Additionally, it keeps track of recently played music, allowing users to access these tracks quickly from a 'Recent' tab. EMI Music also supports playlist creation, enabling users to organize their music by adding tracks to custom playlists.",
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
