<template>
    <div class="flex min-h-screen flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8 background">
      <div class="shadow-2xl border-[1px] rounded-lg border-gray-200 bg-gray-100 px-16 py-8 sm:max-w-md lg:max-w-lg w-full bg-opacity-50">
        <div class="sm:mx-auto w-full">
          <h2 class="mt-4 text-center text-2xl font-bold tracking-tight text-gray-900">Forgot your password?</h2>
          <p class="mt-4 text-center text-sm text-gray-500">Enter your email address below, and we'll send you a link to reset your password.</p>
        </div>
  
        <div class="mt-6 w-full">
          <form class="space-y-6" action="#" method="POST">
            <!-- Email Address -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-900">Email address</label>
              <div class="mt-2">
                <input id="email" name="email" type="email" required class="block w-full px-2 rounded-md border-[1px] border-gray-400 py-1.5 text-gray-900" />
              </div>
            </div>
  
            <!-- Submit Button -->
            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Reset Password Link</button>
            </div>
          </form>
  
          <!-- Sign In Link -->
          <p class="mt-6 mb-4 text-center text-sm text-gray-500">
            Remembered your password? <router-link to="/login" class="text-blue-500 cursor-pointer">Sign in</router-link>
          </p>
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
  