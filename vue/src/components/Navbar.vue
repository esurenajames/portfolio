<template>
  <nav class="bg-white p-1 flex fixed justify-between items-center top-0 left-0 right-0 z-50">
    <!-- Logo -->
    <div class="flex items-center ml-4 sm:ml-20 lg:ml-10 md:ml-8">
      <a href="#home">
        <img src="@/assets/logo.png" alt="Logo" class="h-12 w-auto cursor-pointer sm:h-16" />
      </a>
    </div>

    <!-- Mobile Menu -->

    <div class="sm:hidden flex items-center mr-4">
      <button @click="toggleMenu" class="text-gray-800 text-2xl">
        &#9776; 
      </button>
    </div>


    <div v-if="menuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity">
      <div class="fixed top-0 right-0 bg-white w-3/5 h-full shadow-lg flex flex-col justify-between p-6 transition-transform transform">
        <button @click="toggleMenu" class="absolute top-4 right-4 text-gray-800 text-4xl">
          &times;
        </button>

        <ul class="flex flex-col space-y-6 mt-16">
          <li>
            <a
              href="#home"
              @click="closeMenu"
              :class="{'border-b-2 border-gray-700': isActive('Home')}"
              class="text-gray-800 text-lg font-medium hover:text-gray-700"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              @click="closeMenu"
              :class="{'border-b-2 border-gray-700': isActive('About')}"
              class="text-gray-800 text-lg font-medium hover:text-gray-700"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#project"
              @click="closeMenu"
              :class="{'border-b-2 border-gray-700': isActive('Projects')}"
              class="text-gray-800 text-lg font-medium hover:text-gray-700"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              @click="closeMenu"
              :class="{'border-b-2 border-gray-700': isActive('Contact')}"
              class="text-gray-800 text-lg font-medium hover:text-gray-700"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/"
              download="James_Esurena_Resume.pdf"
              class="text-blue-900 underline text-lg font-medium hover:text-gray-700"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Desktop Links -->
    <ul class="hidden sm:flex md:flex space-x-6 items-center mr-10 mt-4 sm:mt-0">
      <li class="px-4">
        <a
          href="#home"
          :class="{'border-b-2 border-gray-700': isActive('Home')}"
          class="text-gray-800 font-bold hover:text-gray-700 pb-1 transition-all duration-200"
        >
          Home
        </a>
      </li>
      <li class="px-4">
        <a
          href="#about"
          :class="{'border-b-2 border-gray-700': isActive('About')}"
          class="text-gray-800 font-bold hover:text-gray-700 pb-1 transition-all duration-200"
        >
          About
        </a>
      </li>
      <li class="px-4">
        <a
          href="#project"
          :class="{'border-b-2 border-gray-700': isActive('Projects')}"
          class="text-gray-800 font-bold hover:text-gray-700 pb-1 transition-all duration-200"
        >
          Projects
        </a>
      </li>
      <li class="px-4">
        <a
          href="#contact"
          :class="{'border-b-2 border-gray-700': isActive('Contact')}"
          class="text-gray-800 font-bold hover:text-gray-700 pb-1 transition-all duration-200"
        >
          Contact
        </a>
      </li>
      <li>
        <!-- Resume Button -->
        <a
          href="/"
          download="James_Esurena_Resume.pdf"
          class="text-white font-bold py-2 px-6 rounded-full bg-black hover:bg-gray-900"
        >
          Resume
        </a>
      </li>
    </ul>
  </nav>
</template>


<script setup>
import { ref, computed, watch } from "vue";

// Props
const props = defineProps({
  currentPage: String,
});

// Mobile menu state
const menuOpen = ref(false);

// Methods
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};

// Check if a link is active based on the current page
const isActive = (section) => props.currentPage === section;
</script>


<style scoped>
/* Smooth Transition for Menu */
.fixed {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
</style>
