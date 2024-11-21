<template>
  <section id="about" class="section-class">
    <div class="bg-gray-900 pt-10 rounded-3xl">
    <div class="flex flex-col xl:flex-row items-center justify-center py-8 px-8 xl:px-20 space-y-10 xl:space-y-0">
      <!-- Image Section -->
      <div class="flex-1 mt-10 flex justify-center">
        <!-- Wrapper for glow effect -->
        <div class="relative group">
          <div class="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg opacity-70 group-hover:opacity-100 group-hover:duration-200 transition-all duration-1000"></div>
          <img
            class="relative z-10 h-auto max-w-full sm:max-w-lg rounded-xl text-lg font-bold text-white transition-all duration-200 bg-gray-900 floating-effect"
            src="@/assets/personal-pic.png"
            alt="PHP Developer"
          />
        </div>
      </div>

      <!-- Static About Me Section -->
      <div class="flex-1 text-left justify-center">
        <h2 class="md:text-4xl text-2xl md:py-0 py-2 font-bold text-white text-center mb-6 ">About Me</h2>
        <p class="text-gray-400 md:text-lg text-base mb-4">
          I'm <span class="font-bold text-white">James Esureña</span>, a full-stack web developer focused on Laravel and Vue.js. I build responsive, user-friendly web applications that solve real-world problems.
        </p>
        <p class="text-gray-400 md:text-lg text-base mb-4">
          I develop scalable solutions using RESTful APIs, JSON, and clean, reusable and maintainable code. I excel in building seamless front-to-backend workflows while adhering to modern design patterns and best practices.
        </p>
        <p class="text-gray-400 md:text-lg text-base mb-4">
          My approach involves breaking down complex problems into manageable solutions, writing clean code, and continuously optimizing for performance and scalability.
        </p>

        <!-- Education and Work Section -->
        <div class="mt-6">
          <!-- Toggle Buttons -->
          <div class="flex justify-center space-x-4 mb-6">
            <button
              @click="toggleSection('education')"
              :class="{'bg-blue-500 text-white': activeSection === 'education', 'text-blue-500 border border-blue-500': activeSection !== 'education'}"
              class="px-6 py-2 rounded-lg font-semibold flex items-center space-x-2"
            >
              <img src="@/assets/icons8-education-60.png" alt="Education Icon" class="w-6 h-6" />
              <span>Education</span>
            </button>
            <button
              @click="toggleSection('work')"
              :class="{'bg-blue-500 text-white': activeSection === 'work', 'text-blue-500 border border-blue-500': activeSection !== 'work'}"
              class="px-6 py-2 rounded-lg font-semibold flex items-center space-x-2"
            >
              <img src="@/assets/icons8-work-60.png" alt="Work Icon" class="w-6 h-6" />
              <span>Work</span>
            </button>
          </div>

          <!-- Education Section -->
          <div v-if="activeSection === 'education'" class="text-gray-300 p-10 bg-gray-800 rounded-lg">
            <div class="flex flex-row items-start space-x-6 text-left">
              <!-- Image -->
              <div class="flex-shrink-0">
                <img src="@/assets/nu-logo.png" alt="National University Logo" class="w-16 h-16 rounded-lg">
              </div>
              <!-- Text -->
              <div>
                <h4 class="font-bold text-sm md:text-base py-1 md:py-0 text-white">National University - Fairview</h4>
                <p class="text-sm font-medium py-1 md:py-0">BS in Information Technology with specialization in Mobile and Internet Technologies</p>
                <p class="text-sm text-gray-400 ">2021 - 2025 | Hoping na Laude</p>
              </div>
            </div>
          </div>

          <!-- Work Experience Section -->
          <div v-if="activeSection === 'work'" class="text-gray-300 p-10 bg-gray-800 rounded-lg">
            <div class="flex flex-row items-start space-x-6 text-left">
              <!-- Image -->
              <div class="flex-shrink-0">
                <img src="@/assets/zeusbytes-logo.png" alt="Zeusbytes Tech Logo" class="w-16 h-16 rounded-lg">
              </div>
              <!-- Text -->
              <div>
                <h4 class="font-bold text-sm md:text-base text-white py-1 md:py-0">Zeusbytes</h4>
                <p class="text-sm font-medium py-1 md:py-0">Web Developer - Internship</p>
                <p class="text-sm text-gray-400">November 2024 - March 2025</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Skills Section -->
    <Skills />
  </div>
</section>
</template>

<script setup>
import { ref } from 'vue';
import Skills from './Skills.vue';

// Reactive state to manage the active section
const activeSection = ref('education');

// Function to toggle between Education and Work sections
const toggleSection = (section) => {
  activeSection.value = section;
};
</script>

<style scoped>

</style>
