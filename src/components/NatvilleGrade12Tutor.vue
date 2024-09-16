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
            
  '/apps/natville_g12/physics_list_mockup.png',
  '/apps/natville_g12/electronics_mockup.png',
  '/apps/natville_g12/electromagnetism_mockup.png',
  '/apps/natville_g12/applications_mockup.png',
  ''
        ],
        portfolioTitle: 'Natville Grade 12 Physics',
        portfolioDescription: 'I’m here to help grade 12 students with my Physics course, and more subjects are coming soon! If you’re preparing for campus or need support, stay tuned for additional courses in other grade 12 subjects. Access my current tutorials by downloading the app below. Thank you!',
        portfolioAdditionalInfo: 'Natville Grade 12 Tutor is an educational app currently focused on the Grade 12 Physics course. The app follows a similar model to my previous tutorials, where users can access the first video for free. The remaining videos require a subscription, which can be activated by sending an activation key. This approach allows students to explore the course content while providing a monetization structure for full access to the entire course.',
        portfolioExtraDetails: 'No extra details.',
        portfolioCategory: 'Android Java | VueJS Website',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'August 2024',
        portfolioProjectUrl: 'https://natville-grade-12-tutor.vercel.app/',
        portfolioPageTitle: 'Natville Grade 12 Physics'
      };
    }
  }
  </script>
