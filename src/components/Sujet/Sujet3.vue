<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4 text-center">Exercice 3 : Liste avec Dialog</h2>
    
    <DataTable :value="utilisateurs" class="w-full">
      <Column field="nom" header="Nom"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="poste" header="Poste"></Column>
      <Column header="Actions">
        <template #body="{ data }">
          <Button 
            label="Voir" 
            size="small"
            @click="ouvrirDialog(data)"
          />
        </template>
      </Column>
    </DataTable>
    
    <Dialog 
      v-model:visible="dialogVisible" 
      :header="`Détails de ${utilisateurSelectionne?.nom}`"
      :style="{ width: '400px' }"
      modal
    >
      <div v-if="utilisateurSelectionne" class="flex flex-col gap-3">
        <div>
          <strong>Nom :</strong> {{ utilisateurSelectionne.nom }}
        </div>
        <div>
          <strong>Email :</strong> {{ utilisateurSelectionne.email }}
        </div>
        <div>
          <strong>Poste :</strong> {{ utilisateurSelectionne.poste }}
        </div>
        <div>
          <strong>Téléphone :</strong> {{ utilisateurSelectionne.telephone }}
        </div>
        <div>
          <strong>Ville :</strong> {{ utilisateurSelectionne.ville }}
        </div>
      </div>
      
      <template #footer>
        <Button 
          label="Fermer" 
          @click="dialogVisible = false"
          autofocus
        />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

interface Utilisateur {
  id: number
  nom: string
  email: string
  poste: string
  telephone: string
  ville: string
}

const dialogVisible = ref(false)
const utilisateurSelectionne = ref<Utilisateur | null>(null)

const utilisateurs: Utilisateur[] = [
  {
    id: 1,
    nom: 'Marie Dupont',
    email: 'marie.dupont@exemple.com',
    poste: 'Développeuse Frontend',
    telephone: '01 23 45 67 89',
    ville: 'Paris'
  },
  {
    id: 2,
    nom: 'Pierre Martin',
    email: 'pierre.martin@exemple.com',
    poste: 'Développeur Backend',
    telephone: '01 98 76 54 32',
    ville: 'Lyon'
  },
  {
    id: 3,
    nom: 'Sophie Bernard',
    email: 'sophie.bernard@exemple.com',
    poste: 'Chef de projet',
    telephone: '01 11 22 33 44',
    ville: 'Toulouse'
  }
]

const ouvrirDialog = (utilisateur: Utilisateur) => {
  utilisateurSelectionne.value = utilisateur
  dialogVisible.value = true
}
</script>