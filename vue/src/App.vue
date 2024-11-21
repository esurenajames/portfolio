<script setup>
import { ref, watch } from 'vue';
import { SpeedInsights } from '@vercel/speed-insights/vue';
import { Analytics } from '@vercel/analytics/vue';

import Home from './views/Home.vue';
import About from './views/About.vue';
import Project from './views/Project.vue';
import Contact from './views/Contact.vue';
import Navbar from './components/Navbar.vue';
import Socials from './components/Socials.vue';
import Footers from './components/Footers.vue';

// Reactive state for the current section
const currentPage = ref('Home'); // Default to 'Home'

// Update the document title whenever currentPage changes
watch(currentPage, (newPage) => {
  document.title = `${newPage} - James Esurena`;
});

// Function to update the current page based on scroll position
const updateCurrentPage = () => {
  const sections = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'project', title: 'Projects' },
    { id: 'contact', title: 'Contact' },
  ];

  let activeSection = 'Home'; // Default section
  sections.forEach((section) => {
    const element = document.getElementById(section.id);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        activeSection = section.title;
      }
    }
  });

  currentPage.value = activeSection;
};

// Add scroll event listener to update the current page
window.addEventListener('scroll', updateCurrentPage);
</script>

<template>

  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

  <!-- Navbar -->
  <Navbar :current-page="currentPage" />

  <!-- Sections -->
  <div id="home"><Home /></div>
  <div id="about"><About /></div>
  <div id="project"><Project /></div>
  <div id="contact"><Contact /></div>

  <SpeedInsights />
  <Analytics />
  <!-- Components -->
  <Footers />
  <Socials />
</template>

<style scoped>
/* Optional styles for App.vue */
html {
  scroll-behavior: smooth; /* Smooth scrolling */
}
</style>
