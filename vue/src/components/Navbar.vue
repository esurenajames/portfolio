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
          <li v-for="link in navLinks" :key="link.label">
            <a
              v-if="link.type === 'link'"
              :href="link.href"
              @click="closeMenu"
              :class="{'border-b-2 border-gray-700': isActive(link.label)}"
              class="text-gray-800 text-lg font-medium hover:text-gray-700"
            >
              {{ link.label }}
            </a>
            <a
              v-else-if="link.type === 'download'"
              :href="link.href"
              download
              class="text-blue-900 underline text-lg font-medium hover:text-gray-700"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Desktop Links -->
    <ul class="hidden sm:flex md:flex space-x-6 items-center mr-10 mt-4 sm:mt-0">
      <li v-for="link in navLinks" :key="link.label" class="px-4">
        <a
          v-if="link.type === 'link'"
          :href="link.href"
          :class="{'border-b-2 border-gray-700': isActive(link.label)}"
          class="text-gray-800 font-bold hover:text-gray-700 pb-1 transition-all duration-200"
        >
          {{ link.label }}
        </a>
        <a
          v-else-if="link.type === 'download'"
          :href="link.href"
          download
          class="text-white font-bold py-2 px-6 rounded-full bg-black hover:bg-gray-900"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";

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

// Navigation Links
const navLinks = [
  { label: "Home", href: "#home", type: "link" },
  { label: "About", href: "#about", type: "link" },
  { label: "Projects", href: "#project", type: "link" },
  { label: "Contact", href: "#contact", type: "link" },
  { label: "Resume", href: "/James_Esurena_Resume.pdf", type: "download" },
];
</script>

<style scoped>
/* Smooth Transition for Menu */
.fixed {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
</style>
