<template>
    <div class="fixed left-0 top-1/2 transform -translate-y-1/2 space-y-6 z-20 lg:block hidden">
      <!-- LinkedIn Icon -->
      <a href="https://www.linkedin.com/in/esurenajames/" target="_blank" class="group">
        <div class="flex items-center justify-start bg-[#0288D1] h-16 w-16 group-hover:w-48 transition-all duration-500 ease-in-out rounded-none shadow-lg hover:shadow-2xl overflow-hidden relative">
          <span class="text-white font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out absolute left-16 ml-4 z-10">LinkedIn</span>
          <img src="@/assets/social-linkedin.png" alt="LinkedIn" class="h-8 w-8 mx-4" />
        </div>
      </a>
  
      <a @click="openMail" href="javascript:void(0)" class="group">
        <div class="flex items-center justify-start bg-[#313131] h-16 w-16 group-hover:w-48 transition-all duration-500 ease-in-out rounded-none shadow-lg hover:shadow-2xl overflow-hidden relative">
          <span class="text-white font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out absolute left-16 ml-4 z-10">Gmail</span>
          <img src="@/assets/social-gmail.png" alt="Gmail" class="h-8 w-8 mx-4" />
        </div>
      </a>
  
      <a href="https://github.com/esurenajames/" target="_blank" class="group">
        <div class="flex items-center justify-start bg-black h-16 w-16 group-hover:w-48 transition-all duration-500 ease-in-out rounded-none shadow-lg hover:shadow-2xl overflow-hidden relative">
          <span class="text-white font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out absolute left-16 ml-4 z-10">Github</span>
          <img src="@/assets/social-github.png" alt="Instagram" class="h-8 w-8 mx-4" />
        </div>
      </a>
  
      <a href="https://www.instagram.com/cinnamonesurena/" target="_blank" class="group">
        <div class="flex items-center justify-start bg-[#be3939] h-16 w-16 group-hover:w-48 transition-all duration-500 ease-in-out rounded-none shadow-lg hover:shadow-2xl overflow-hidden relative">
          <span class="text-white font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out absolute left-16 ml-4 z-10">Instagram</span>
          <img src="@/assets/social-instagram.png" alt="Instagram" class="h-8 w-8 mx-4" />
        </div>
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Socials',
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
  /* Custom styling for the ripple effect */
  a.group::before {
    content: '';
    position: absolute;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    opacity: 0;
    transition: transform 0.4s ease, opacity 0.4s ease;
  }
  
  a.group:hover::before {
    transform: scale(3);
    opacity: 0.4;
  }
  </style>
  