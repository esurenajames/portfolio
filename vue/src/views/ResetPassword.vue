<script setup>
import { ref } from 'vue';

const newPassword = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const successMessage = ref('');

// Function to handle form submission (password reset)
const handleSubmit = () => {
  if (newPassword.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match';
  } else {
    errorMessage.value = '';
    successMessage.value = 'Your password has been updated successfully!';
    // Add your password reset logic here (e.g., API call to reset password)
  }
};
</script>

<template>
  <div class="flex min-h-screen flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8 background">
    <div class="shadow-2xl border-[1px] rounded-lg border-gray-200 bg-gray-100 px-16 py-8 sm:max-w-md lg:max-w-lg w-full bg-opacity-50">
      <div class="sm:mx-auto w-full">
        <h2 class="mt-4 text-center text-2xl font-bold tracking-tight text-gray-900">Reset Your Password</h2>
        <p class="mt-4 text-center text-sm text-gray-500">Please enter your new password below.</p>
      </div>

      <div class="mt-4 w-full">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- New Password -->
          <div>
            <label for="newPassword" class="block text-sm font-medium text-gray-900">New Password</label>
            <div class="mt-2">
              <input
                v-model="newPassword"
                id="newPassword"
                name="newPassword"
                type="password"
                required
                class="block w-full px-2 rounded-md border-[1px] border-gray-400 py-1.5 text-gray-900"
              />
            </div>
          </div>

          <!-- Confirm Password -->
          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-900">Confirm Password</label>
            <div class="mt-2">
              <input
                v-model="confirmPassword"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                class="block w-full px-2 rounded-md border-[1px] border-gray-400 py-1.5 text-gray-900"
              />
            </div>
          </div>

          <!-- Error Message -->
          <div v-if="errorMessage" class="text-sm text-red-600">
            <p>{{ errorMessage }}</p>
          </div>

          <!-- Success Message -->
          <div v-if="successMessage" class="text-sm text-green-600">
            <p>{{ successMessage }}</p>
          </div>

          <!-- Reset Button -->
          <div>
            <button
              type="submit" class="flex w-full mt-6 mb-6 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Reset Password</button>
          </div>

          <p class="mt-6 mb-4 text-center text-sm text-gray-500">
            Dont want to change your password? <router-link to="/login" class="text-blue-500 cursor-pointer">Sign in</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .background {
    background-image: url('@/assets/background.png');
    background-size: cover;
    background-position: center;
  }
</style>
