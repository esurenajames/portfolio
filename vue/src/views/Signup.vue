<script setup>
import { ref } from 'vue';

const showModal = ref(false);  // State for controlling modal visibility

// Function to open the modal
const openModal = (event) => {
  event.preventDefault();  // Prevent form submission
  showModal.value = true;
};

// Function to close the modal
const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <div class="flex min-h-screen flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8 background">
    <div class="shadow-2xl border-[1px] rounded-lg border-gray-200 bg-gray-100 px-16 py-8 sm:max-w-md lg:max-w-lg w-full bg-opacity-50">
      <div class="sm:mx-auto w-full">
        <h2 class="mt-4 text-center text-2xl font-bold tracking-tight text-gray-900">Create an account</h2>
        <p class="mt-4 text-center text-sm text-gray-500">Don't have an account yet? Provide the details below to create one.</p>
      </div>

      <div class="mt-4 w-full">
        <form class="space-y-6" action="#" method="POST">
          <!-- First Name and Last Name (side by side) -->
          <div>
            <label for="firstName" class="block text-sm font-medium text-gray-900">Name</label>
            <div class="mt-2">
              <input id="firstName" name="firstName" type="text" required class="block w-full px-2 rounded-md border-[1px] border-gray-400 py-1.5 text-gray-900" />
            </div>
          </div>

          <!-- Email Address -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required class="block w-full px-2 rounded-md border-[1px] border-gray-400 py-1.5 text-gray-900" />
            </div>
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-900">Password</label>
            <div class="mt-2">
              <input id="password" name="password" type="password" required class="block w-full px-2 rounded-md border-[1px] border-gray-400 py-1.5 text-gray-900" />
            </div>
          </div>

          <!-- Confirm Password -->
          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-900">Confirm Password</label>
            <div class="mt-2">
              <input id="confirmPassword" name="confirmPassword" type="password" required class="block w-full px-2 rounded-md border-[1px] border-gray-400 py-1.5 text-gray-900" />
            </div>
          </div>

          <!-- Terms and Conditions Checkbox -->
          <div class="flex items-center">
            <input id="terms" name="terms" type="checkbox" class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-0 focus:ring-transparent" />
            <label for="terms" class="ml-2 text-sm text-gray-900">
              I agree to the 
              <button @click="openModal" class="text-blue-500 hover:text-blue-400 focus:outline-none">terms and conditions</button>
            </label>
          </div>

          <!-- Submit Button -->
          <div>
            <button type="submit" class="flex w-full mt-6 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Account</button>
          </div>
        </form>

        <!-- Sign In Link -->
        <p class="mt-6 mb-4 text-center text-sm text-gray-500">
          Already have an account? <router-link to="/login" class="text-blue-500 cursor-pointer">Sign in</router-link>
        </p>
      </div>
    </div>
  </div>

  <!-- Modal for Terms and Conditions with Fade Animation -->
  <transition name="fade">
    <div v-if="showModal" class="fixed inset-0 z-1000 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-md w-96">
        <h3 class="text-lg font-bold text-gray-900">Terms and Conditions</h3>
        <p class="mt-4 text-sm text-gray-700">Your terms and conditions text goes here. You can add more details about the terms and policies.</p>
        <div class="mt-4 flex justify-end">
          <button @click="closeModal" class="px-4 py-2 text-sm  text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none">Close</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
  .background {
    background-image: url('@/assets/background.png');
    background-size: cover;
    background-position: center;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0 ;
  }
</style>
