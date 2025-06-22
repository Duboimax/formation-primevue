<script setup lang="ts">
import Sujet1 from '@/components/Sujet/Sujet1.vue'
import Sujet2 from '@/components/Sujet/Sujet2.vue'
import Sujet3 from './Sujet/Sujet3.vue'
import Sujet4 from './Sujet/Sujet4.vue'
import TabPanel from 'primevue/tabpanel'
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
                            <i class="fas fa-mouse-pointer text-blue-500"></i>
                            <span>Sujet 1</span>
                            <Badge value="15 min" severity="info" />
                        </div>
                    </Tab>
                    <Tab value="1">
                        <div class="flex items-center gap-2">
                            <i class="fas fa-edit text-green-500"></i>
                            <span>Sujet 2</span>
                            <Badge value="15 min" severity="success" />
                        </div>
                    </Tab>
                    <Tab value="4">
                        <div class="flex items-center gap-2">
                            <i class="fas fa-table text-purple-500"></i>
                            <span>Sujet 3</span>
                            <Badge value="15 min" severity="warn" />
                        </div>
                    </Tab>
                    <Tab value="3">
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
                                    <i class="fas fa-play-circle text-2xl text-blue-500"></i>
                                    Exercice 1 : Bouton avec Toast
                                </div>
                            </template>

                            <template #content>
                                <div class="space-y-4">
                                    <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                        <h3 class="font-semibold text-blue-800 mb-2">🎯 Objectif</h3>
                                        <p class="text-blue-700">Premier contact avec PrimeVue : interactions simples et
                                            notifications</p>
                                    </div>

                                    <div class="bg-gray-50 p-4 rounded-lg">
                                        <h3 class="font-semibold mb-3">📋 Consignes :</h3>
                                        <ol class="list-decimal list-inside space-y-2 text-gray-700">
                                            <li>Créer un
                                                <Chip label="Button" class="text-xs mx-1" /> avec le label "Envoyer"
                                            </li>
                                            <li>Au clic, afficher un
                                                <Chip label="loading" class="text-xs mx-1" /> pendant 2 secondes
                                            </li>
                                            <li>Puis afficher un
                                                <Chip label="Toast" class="text-xs mx-1" /> de succès
                                            </li>
                                            <li>Enfin modifier le design token du bouton pour qu'il n'y ai plus de
                                                border radius
                                            </li>
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
                    <TabPanel value="1">
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
                                            <li>Créer 2
                                                <Chip label="InputText" class="text-xs mx-1" /> : nom et email
                                            </li>
                                            <li>Ajouter une validation (champs requis + format email)</li>
                                            <li>Afficher les erreurs en rouge sous les champs</li>
                                            <li>Toast d'erreur si invalide, de succès si valide</li>
                                            <li>Enfin modifier le design token du bouton et de l'inputText pour qu'il
                                                n'y ai
                                                plus de border radius et modifier la couleur de la bordure pour
                                                l'inputtext
                                            </li>
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
                    <TabPanel value="2">
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
                    <TabPanel value="3">
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