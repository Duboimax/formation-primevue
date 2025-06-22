<template>
  <div class="p-6 max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4 text-center">Exercice 2 : Formulaire Simple</h2>
    
    <form @submit.prevent="validerFormulaire" class="flex flex-col gap-4">
      <div>
        <label class="block text-sm font-medium mb-2">Nom :</label>
        <InputText 
          v-model="nom" 
          placeholder="Votre nom"
          class="w-full"
          :class="{ 'p-invalid': erreurs.nom }"
        />
        <small v-if="erreurs.nom" class="text-red-500">{{ erreurs.nom }}</small>
      </div>
      
      <div>
        <label class="block text-sm font-medium mb-2">Email :</label>
        <InputText 
          v-model="email" 
          placeholder="votre@email.com"
          type="email"
          class="w-full"
          :class="{ 'p-invalid': erreurs.email }"
        />
        <small v-if="erreurs.email" class="text-red-500">{{ erreurs.email }}</small>
      </div>
      
      <Button 
        type="submit"
        label="Valider"
        class="mt-2"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useToast } from 'primevue/usetoast'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

const toast = useToast()
const nom = ref('')
const email = ref('')
const erreurs = reactive({
  nom: '',
  email: ''
})

const validerFormulaire = () => {
  // Reset des erreurs
  erreurs.nom = ''
  erreurs.email = ''
  
  let hasError = false
  
  // Validation nom
  if (!nom.value.trim()) {
    erreurs.nom = 'Le nom est requis'
    hasError = true
  }
  
  // Validation email
  if (!email.value.trim()) {
    erreurs.email = 'L\'email est requis'
    hasError = true
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    erreurs.email = 'Format d\'email invalide'
    hasError = true
  }
  
  if (hasError) {
    toast.add({
      severity: 'error',
      summary: 'Erreur',
      detail: 'Veuillez corriger les erreurs dans le formulaire',
      life: 3000
    })
  } else {
    toast.add({
      severity: 'success',
      summary: 'Succès',
      detail: `Bonjour ${nom.value}, votre formulaire est valide !`,
      life: 3000
    })
    
    // Reset du formulaire
    nom.value = ''
    email.value = ''
  }
}
</script>