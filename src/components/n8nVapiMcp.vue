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
            '/ai/n8n_vapi_mcp/one_mcp.png',
            '/ai/n8n_vapi_mcp/my_tools.png',
            '/ai/n8n_vapi_mcp/warranty_execution.png',
            '/ai/n8n_vapi_mcp/warranty_response.png',
        ],
        portfolioTitle: 'n8n Vapi MCP',
        portfolioDescription: "Integrates many tools easily available in n8n with Vapi Assistant using MCP for a clinic. Books appointments, sends emergencies through email, logs user data in airtable, and provides accurate information from google docs about the company and it's services.",
        portfolioAdditionalInfo: "",
        portfolioExtraDetails: 'No extra details.',
        portfolioCategory: 'n8n | MCP | Vapi Assistant | Airtable | Google Docs | AI',
        portfolioClient: 'Personal Project',
        portfolioProjectDate: 'August 2025',
        portfolioProjectUrl: 'https://github.com/Natan-Asrat/n8n_vapi_mcp_appointment_setting_voice_agent',
        portfolioPageTitle: 'n8n Vapi MCP'
      };
    }
  }
  </script>
