<script setup lang="ts">
import { ref } from 'vue'
import Sujet3 from './Sujet/Sujet3.vue'
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Card from 'primevue/card'
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
            <Tabs value="0" class="w-full">
                <TabList>
                    <Tab value="0">Sujet 3</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel value="0">
                        <Card class="mb-6">
                            <template #title>
                                <div class="flex items-center gap-3">
                                    <i class="fas fa-users text-2xl text-purple-500"></i>
                                    Exercice 3 : Liste avec Dialog
                                </div>
                            </template>

                            <template #content>
                                <div class="space-y-4">
                                    <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                                        <h3 class="font-semibold text-purple-800 mb-2">🎯 Objectif</h3>
                                        <p class="text-purple-700">Affichage de données tabulaires et modales</p>
                                    </div>

                                    <div class="bg-gray-50 p-4 rounded-lg">
                                        <h3 class="font-semibold mb-3">📋 Consignes :</h3>
                                        <ol class="list-decimal list-inside space-y-2 text-gray-700">
                                            <li>Créer une
                                                <Chip label="DataTable" class="text-xs mx-1" /> avec 3 utilisateurs
                                            </li>
                                            <li>Colonnes : nom, email, poste + colonne "Actions"</li>
                                            <li>Bouton "Voir" qui ouvre un
                                                <Chip label="Dialog" class="text-xs mx-1" />
                                            </li>
                                            <li>Le dialog affiche tous les détails de l'utilisateur</li>
                                        </ol>
                                    </div>

                                    <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                                        <h3 class="font-semibold text-purple-800 mb-2">💡 Composants à utiliser</h3>
                                        <div class="flex flex-wrap gap-2">
                                            <Chip label="DataTable" severity="warning" />
                                            <Chip label="Column" severity="warning" />
                                            <Chip label="Dialog" severity="warning" />
                                            <Chip label="Button" severity="warning" />
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </Card>

                        <Sujet3 />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 1200px;
}
</style>