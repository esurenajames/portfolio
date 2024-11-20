<template>
    <div class="bg-gray-900 pb-16">
      <!-- Skills Section -->
      <div class="skills-section px-8 lg:px-20">
        <h2 class="md:text-4xl text-2xl font-bold text-white text-center md:py-10 py-5 mb-6">Skills</h2>
        <div class="lg:ml-20 lg:mr-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div
            v-for="(skill, index) in skills"
            :key="index"
            class="skill-card bg-gray-800 p-6 rounded-lg text-center transition-transform transform hover:scale-105 flex flex-col justify-center items-center hover:shadow-lg hover:shadow-blue-500/50"
          >
            <!-- Skill Icon -->
            <img :src="skill.icon" alt="skill.icon" class="md:h-16 h-12 w-auto mx-auto mb-4" />
            
            <!-- Skill Name with background and border radius -->
            <div class="bg-gray-700 text-white text-md font-semibold py-2 px-4 rounded-full mt-4 md:text-base text-xs">
              {{ skill.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import htmlIcon from '@/assets/icons/html5-icon.png';
  import vueIcon from '@/assets/icons/vue.js-icon.png';
  import laravelIcon from '@/assets/icons/laravel-icon.png';
  import jsIcon from '@/assets/icons/javascript-icon.png';
  import phpIcon from '@/assets/icons/php-icon.png';
  import cssIcon from '@/assets/icons/css-icon.png';
  import tailwindIcon from '@/assets/icons/tailwind-icon.png';
  import livewireIcon from '@/assets/icons/livewire-icon.png';
  import alpineIcon from '@/assets/icons/alpine-icon.png';
  import cplusIcon from '@/assets/icons/c++-icon.png';
  import mysqlIcon from '@/assets/icons/mysql-icon.png';
  import gitIcon from '@/assets/icons/git-icon.png';
  import nodeJsIcon from '@/assets/icons/node.js-icon.png'; 
  import expressIcon from '@/assets/icons/express-icon.png';
  import postmanIcon from '@/assets/icons/postman-icon.png';
  
  const skills = [
    { name: 'Laravel', icon: laravelIcon },
    { name: 'Vue.js', icon: vueIcon },
    { name: 'PHP', icon: phpIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'HTML5', icon: htmlIcon },
    { name: 'CSS3', icon: cssIcon },
    { name: 'Tailwind CSS', icon: tailwindIcon },
    { name: 'Alpine.js', icon: alpineIcon },
    { name: 'Livewire', icon: livewireIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'Node.js', icon: nodeJsIcon },
    { name: 'Express.js', icon: expressIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'C++', icon: cplusIcon },
    { name: 'Postman', icon: postmanIcon },
  ];
  </script>
  
  <style scoped>
  .skill-card {
    transition: transform 0.3s ease-in-out;
    box-shadow: 0 0 2px rgba(59, 130, 246, 0.7); /* Glowing effect on hover */
  }
  
  .skill-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.7); /* Glowing effect on hover */
  }
  </style>
  