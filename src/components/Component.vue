<script setup lang="ts">
import Sujet4 from './Sujet/Sujet4.vue'
import TabPanel from 'primevue/tabpanel'
import Tab from 'primevue/tab'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import TabPanels from 'primevue/tabpanels'
import Card from 'primevue/card'
import Badge from 'primevue/badge'
import Chip from 'primevue/chip'
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
                    <Tab value="0">
                        <div class="flex items-center gap-2">
                            <i class="fas fa-calendar-alt text-orange-500"></i>
                            <span>Sujet 4</span>
                            <Badge value="15 min" severity="danger" />
                        </div>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel value="0">
                        <Card class="mb-6">
                            <template #title>
                                <div class="flex items-center gap-3">
                                    <i class="fas fa-calendar-check text-2xl text-orange-500"></i>
                                    Exercice 4 : Calendrier Popup
                                </div>
                            </template>

                            <template #content>
                                <div class="space-y-4">
                                    <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                                        <h3 class="font-semibold text-orange-800 mb-2">🎯 Objectif</h3>
                                        <p class="text-orange-700">Composants avancés et overlays</p>
                                    </div>

                                    <div class="bg-gray-50 p-4 rounded-lg">
                                        <h3 class="font-semibold mb-3">📋 Consignes :</h3>
                                        <ol class="list-decimal list-inside space-y-2 text-gray-700">
                                            <li>Bouton "Choisir une date" qui ouvre un
                                                <Chip label="OverlayPanel" class="text-xs mx-1" />
                                            </li>
                                            <li>L'overlay contient un
                                                <Chip label="Calendar" class="text-xs mx-1" /> inline
                                            </li>
                                            <li>Afficher la date sélectionnée dans le bouton</li>
                                            <li>Fermer automatiquement l'overlay après sélection</li>
                                            <li>Enfin modifier le design token du bouton pour qu'il n'y ai plus de
                                                border
                                                radius</li>
                                        </ol>
                                    </div>

                                    <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                                        <h3 class="font-semibold text-orange-800 mb-2">💡 Composants à utiliser</h3>
                                        <div class="flex flex-wrap gap-2">
                                            <Chip label="Calendar" severity="danger" />
                                            <Chip label="OverlayPanel" severity="danger" />
                                            <Chip label="Button" severity="danger" />
                                            <Chip label="ref template" severity="danger" />
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </Card>

                        <Sujet4 />
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