<template>
  <nav class="bg-white p-1 flex fixed justify-between items-center top-0 left-0 right-0 z-50">
    <!-- Logo on the left -->
    <div class="flex items-center ml-4 sm:ml-20 lg:ml-10 md:ml-8">
      <a href="#home">
        <img src="@/assets/logo.png" alt="Logo" class="h-12 w-auto cursor-pointer sm:h-16" />
      </a>
    </div>

    <!-- Mobile Burger Icon -->
    <div class="block sm:hidden md:hidden">
      <button
        @click="toggleMenu"
        class="block sm:hidden focus:outline-none mr-3 text-gray-800"
      >
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity">
      <div class="fixed top-0 right-0 bg-white w-3/5 h-full shadow-lg flex flex-col justify-between p-6 transition-transform transform">
        <!-- Close Button -->
        <button @click="toggleMenu" class="absolute top-4 right-4 text-gray-800 text-4xl">
          &times;
        </button>

        <!-- Navigation Links -->
        <ul class="flex flex-col space-y-6 mt-16">
          <li>
            <a href="#home" @click="closeMenu" :class="{'border-b-2 border-gray-700': isActive('#home')}" class="text-gray-800 text-lg font-medium hover:text-gray-700">
              Home
            </a>
          </li>
          <li>
            <a href="#about" @click="closeMenu" :class="{'border-b-2 border-gray-700': isActive('#about')}" class="text-gray-800 text-lg font-medium hover:text-gray-700">
              About
            </a>
          </li>
          <li>
            <a href="#projects" @click="closeMenu" :class="{'border-b-2 border-gray-700': isActive('#projects')}" class="text-gray-800 text-lg font-medium hover:text-gray-700">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" @click="closeMenu" :class="{'border-b-2 border-gray-700': isActive('#contact')}" class="text-gray-800 text-lg font-medium hover:text-gray-700">
              Contact
            </a>
          </li>
          <li>
            <a href="#" @click="closeMenu" :class="{'border-b-2 border-gray-700': isActive('#')}" class="text-blue-900 underline text-lg font-medium hover:text-gray-700">
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Desktop Links -->
    <ul class="hidden sm:flex md:flex space-x-6 items-center mr-10 mt-4 sm:mt-0">
      <li class="px-4">
        <a href="#home" :class="{'border-b-2 border-gray-700': isActive('#home')}" class="text-gray-800 font-bold hover:text-gray-700 pb-1 transition-all duration-200">
          Home
        </a>
      </li>
      <li class="px-4">
        <a href="#about" :class="{'border-b-2 border-gray-700': isActive('#about')}" class="text-gray-800 font-bold hover:text-gray-700 pb-1 transition-all duration-200">
          About
        </a>
      </li>
      <li class="px-4">
        <a href="#projects" :class="{'border-b-2 border-gray-700': isActive('#projects')}" class="text-gray-800 font-bold hover:text-gray-700 pb-1 transition-all duration-200">
          Projects
        </a>
      </li>
      <li class="px-4">
        <a href="#contact" :class="{'border-b-2 border-gray-700': isActive('#contact')}" class="text-gray-800 font-bold hover:text-gray-700 pb-1 transition-all duration-200">
          Contact
        </a>
      </li>
      <li>
        <button class="text-white font-bold py-2 px-6 rounded-full bg-black hover:bg-gray-900">
          Resume
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";

const menuOpen = ref(false);
const currentHash = ref(window.location.hash);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};

const isActive = (hash) => currentHash.value === hash;

onMounted(() => {
  window.addEventListener("hashchange", () => {
    currentHash.value = window.location.hash;
  });
});
</script>

<style scoped>
/* Smooth Transition for Menu */
.fixed {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
</style>
