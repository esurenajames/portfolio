<template>
  <section id="projects" class="section-class">
    <div class="bg-gray-900 pb-16">
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-2xl md:text-4xl font-bold text-white text-center py-5 md:py-10 mb-6">
          My Projects
        </h1>

        <!-- Filter Section -->
        <div class="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-16">
          <button
            v-for="tag in availableTags"
            :key="tag"
            @click="toggleFilter(tag)"
            :class="{
              'bg-blue-500 text-white': activeFilters.includes(tag),
              'bg-gray-700 text-gray-300': !activeFilters.includes(tag),
            }"
            class="px-3 py-2 md:px-4 md:py-2 rounded-lg text-sm md:text-base hover:bg-blue-400 transition"
          >
            {{ tag }}
          </button>
        </div>

        <!-- Project Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          <div
            v-for="(project, index) in filteredProjects"
            :key="index"
            class="bg-gray-800 rounded-sm shadow-md hover:scale-105 transform transition-transform"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="mb-4 w-full h-52 sm:h-60 object-cover rounded-t-lg"
            />
            <div class="p-4">
              <h2 class="text-lg md:text-xl font-semibold text-white mb-2">
                {{ project.title }}
              </h2>
              <p class="text-gray-400 text-sm md:text-base mb-4">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="bg-gray-700 text-gray-300 px-2 py-1 text-xs md:text-sm rounded-lg"
                >
                  {{ tag }}
                </span>
              </div>
              <a
                :href="project.link"
                target="_blank"
                class="group flex items-center text-blue-400 text-sm md:text-base font-medium hover:text-blue-500 transition mb-3"
              >
                View Details
                <span
                  class="ml-2 text-blue-400 group-hover:translate-x-1 group-hover:text-blue-500 transition-transform duration-200"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

// Projects with tags
const projects = [
  {
    title: "Project One",
    description: "A Laravel and Vue.js project.",
    image: "https://via.placeholder.com/400x250",
    link: "https://example.com/project-one",
    tags: ["Laravel", "Vue.js", "JavaScript"],
  },
  {
    title: "Project Two",
    description: "A JavaScript and Tailwind CSS project.",
    image: "https://via.placeholder.com/400x250",
    link: "https://example.com/project-two",
    tags: ["JavaScript", "Tailwind CSS", "HTML5"],
  },
  {
    title: "Project Three",
    description: "A full-stack project using Laravel and Alpine.js.",
    image: "https://via.placeholder.com/400x250",
    link: "https://example.com/project-three",
    tags: ["Laravel", "Alpine.js", "CSS3"],
  },
  {
    title: "Project Three",
    description: "A full-stack project using Laravel and Alpine.js.",
    image: "https://via.placeholder.com/400x250",
    link: "https://example.com/project-three",
    tags: ["Laravel", "Alpine.js", "CSS3"]
  },
];

// Available tags for filtering
const availableTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
);

// Active filters
const activeFilters = ref([]);

// Toggle filter
const toggleFilter = (tag) => {
  if (activeFilters.value.includes(tag)) {
    activeFilters.value = activeFilters.value.filter((t) => t !== tag);
  } else {
    activeFilters.value.push(tag);
  }
};

// Filtered projects
const filteredProjects = computed(() => {
  if (activeFilters.value.length === 0) {
    return projects;
  }
  return projects.filter((project) =>
    activeFilters.value.every((filter) => project.tags.includes(filter))
  );
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.group span {
  transition: transform 0.2s, color 0.2s;
}
</style>
