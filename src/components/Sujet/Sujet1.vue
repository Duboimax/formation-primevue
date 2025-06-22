<template>
  <div class="p-6 max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4 text-center">Sujet 1 : Bouton avec Toast</h2>
    
    <div class="flex flex-col gap-4 items-center">
      <Button 
        :label="loading ? 'Envoi en cours...' : 'Envoyer'"
        :loading="loading"
        @click="envoyerMessage"
        class="w-full"
      />
      
      <div class="text-sm text-gray-600 text-center">
        Cliquez sur le bouton pour voir le toast de succès !
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import Button from 'primevue/button'

const toast = useToast()
const loading = ref(false)

const envoyerMessage = async () => {
  loading.value = true
  
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  loading.value = false
  
  toast.add({
    severity: 'success',
    summary: 'Succès',
    detail: 'Message envoyé avec succès !',
    life: 3000
  })
}
</script>