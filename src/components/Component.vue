<script setup lang="ts">
import { ref } from 'vue'
import Sujet2 from '@/components/Sujet/Sujet2.vue'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Card from 'primevue/card'
import Badge from 'primevue/badge'
import Chip from 'primevue/chip'

const sujetActuel = ref(1)
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-6">
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold text-gray-800 mb-2">
        Formation PrimeVue
      </h1>
      <p class="text-lg text-gray-600">
        4 exercices pratiques pour maîtriser les composants
      </p>
    </div>

    <div class="container mx-auto px-6 mb-8">
      <TabView v-model:activeIndex="sujetActuel" class="w-full">
        <TabPanel>
          <template #header>
            <div class="flex items-center gap-2">
              <i class="fas fa-edit text-green-500"></i>
              <span>Sujet 2</span>
              <Badge value="15 min" severity="success" />
            </div>
          </template>
          
          <Card class="mb-6">
            <template #title>
              <div class="flex items-center gap-3">
                <i class="fas fa-clipboard-list text-2xl text-green-500"></i>
                Exercice 2 : Formulaire Simple
              </div>
            </template>
            
            <template #content>
              <div class="space-y-4">
                <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <h3 class="font-semibold text-green-800 mb-2">🎯 Objectif</h3>
                  <p class="text-green-700">Gestion des formulaires et validation basique</p>
                </div>
                
                <div class="bg-gray-50 p-4 rounded-lg">
                  <h3 class="font-semibold mb-3">📋 Consignes :</h3>
                  <ol class="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Créer 2 <Chip label="InputText" class="text-xs mx-1" /> : nom et email</li>
                    <li>Ajouter une validation (champs requis + format email)</li>
                    <li>Afficher les erreurs en rouge sous les champs</li>
                    <li>Toast d'erreur si invalide, de succès si valide</li>
                    <li>Enfin modifier le design token du bouton et de l'inputText pour qu'il n'y ai plus de border radius et modifier la couleur de la bordure pour l'inputtext </li>
                  </ol>
                </div>
                
                <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <h3 class="font-semibold text-green-800 mb-2">💡 Composants à utiliser</h3>
                  <div class="flex flex-wrap gap-2">
                    <Chip label="InputText" severity="success" />
                    <Chip label="Button" severity="success" />
                    <Chip label="Toast" severity="success" />
                    <Chip label="Validation" severity="success" />
                  </div>
                </div>
              </div>
            </template>
          </Card>
          
          <Sujet2 />
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>