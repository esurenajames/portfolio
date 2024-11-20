<template>
    <div class="text-content">
      <h1 class="text-6xl mb-12 font-bold text-white">{{ sectionTitle }}</h1>
      <p v-for="(paragraph, index) in sectionContent" :key="index" class="text-gray-600 text-lg mb-6">
        {{ paragraph }}
      </p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    sectionTitle: String,
    sectionContent: Array,
  });
  </script>
  
  <style scoped>
  .text-content {
    max-width: 500px;
  }
  </style>
  