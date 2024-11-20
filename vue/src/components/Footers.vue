<template>
    <footer class="bg-gray-800 text-gray-400 py-10">
      <div class="container mx-auto px-4">
        <!-- Top Section -->
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <div>
            <img 
              src="@/assets/other-logo.png" 
              alt="Logo" 
              class="h-16 w-auto cursor-pointer sm:h-16" 
            />
          </div>
  
          <!-- Social Links -->
          <div class="flex space-x-6">
            <div class="w-12 h-12 flex justify-center items-center  rounded-full hover:bg-gray-700 transition-all">
              <a href="https://www.linkedin.com/in/esurenajames/" target="_blank">
                <img src="@/assets/icons8-linkedin-50.png" alt="LinkedIn" class="h-6 w-6" />
              </a>
            </div>
            <div class="w-12 h-12 flex justify-center items-center  rounded-full hover:bg-gray-600 transition-all">
              <a @click="openMail" href="javascript:void(0)">
                <img src="@/assets/icons8-gmail-50.png" alt="Gmail" class="h-6 w-6" />
              </a>
            </div>
            <div class="w-12 h-12 flex justify-center items-center  rounded-full hover:bg-gray-600 transition-all">
              <a href="https://github.com/esurenajames/" target="_blank">
                <img src="@/assets/icons8-github-50.png" alt="Github" class="h-6 w-6" />
              </a>
            </div>
            <div class="w-12 h-12 flex justify-center items-center  rounded-full hover:bg-gray-600 transition-all">
              <a href="https://www.instagram.com/cinnamonesurena/" target="_blank">
                <img src="@/assets/icons8-instagram-60.png" alt="Instagram" class="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
  
        <!-- Horizontal Line -->
        <div class="border-t border-gray-600 my-6"></div>
  
        <!-- Footer Bottom -->
        <div class="text-center text-gray-500 pt-5 text-sm">
          © 2024 James Esurena. All rights reserved.
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    methods: {
    openMail() {
      const email = 'esurenajames@gmail.com';
      const subject = 'Hire me'; // Optional
      const body = 'Hire me';  // Optional
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open the mailto link in a new tab
      window.open(mailtoLink, '_blank');
    },
  }
  };
  </script>
  
  <style scoped>
  /* Add custom styles if necessary */
  </style>
  