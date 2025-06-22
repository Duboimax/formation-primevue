<script setup lang="ts">
import Component from './components/Component.vue';
import { Toast, ConfirmDialog } from 'primevue';
</script>

<template>
  <main class="w-full">
    <Component />
  </main>
  
  <Toast />
  <ConfirmDialog />
</template>