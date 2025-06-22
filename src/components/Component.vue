<script setup lang="ts">
import { ref } from 'vue'
import Sujet1 from '@/components/Sujet/Sujet1.vue'
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
              <i class="fas fa-mouse-pointer text-blue-500"></i>
              <span>Sujet 1</span>
              <Badge value="15 min" severity="info" />
            </div>
          </template>
          
          <Card class="mb-6">
            <template #title>
              <div class="flex items-center gap-3">
                <i class="fas fa-play-circle text-2xl text-blue-500"></i>
                Exercice 1 : Bouton avec Toast
              </div>
            </template>
            
            <template #content>
              <div class="space-y-4">
                <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <h3 class="font-semibold text-blue-800 mb-2">🎯 Objectif</h3>
                  <p class="text-blue-700">Premier contact avec PrimeVue : interactions simples et notifications</p>
                </div>
                
                <div class="bg-gray-50 p-4 rounded-lg">
                  <h3 class="font-semibold mb-3">📋 Consignes :</h3>
                  <ol class="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Créer un <Chip label="Button" class="text-xs mx-1" /> avec le label "Envoyer"</li>
                    <li>Au clic, afficher un <Chip label="loading" class="text-xs mx-1" /> pendant 2 secondes</li>
                    <li>Puis afficher un <Chip label="Toast" class="text-xs mx-1" /> de succès</li>
                    <li>Enfin modifier le design token du bouton pour qu'il n'y ai plus de border radius</li>
                  </ol>
                </div>
                
                <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <h3 class="font-semibold text-green-800 mb-2">💡 Composants à utiliser</h3>
                  <div class="flex flex-wrap gap-2">
                    <Chip label="Button" severity="success" />
                    <Chip label="Toast" severity="success" />
                    <Chip label="useToast" severity="success" />
                  </div>
                </div>
              </div>
            </template>
          </Card>

          <Sujet1 />
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