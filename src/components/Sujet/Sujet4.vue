<template>
  <div class="p-6 max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4 text-center">Exercice 4 : Calendrier Popup</h2>
    
    <div class="flex flex-col gap-4 items-center">
      <Button 
        :label="dateSelectionnee ? `Date : ${formaterDate(dateSelectionnee)}` : 'Choisir une date'"
        @click="toggleCalendrier"
        class="w-full"
      />
      
      <OverlayPanel ref="overlayPanel" class="w-auto">
        <Calendar 
          v-model="dateSelectionnee" 
          @date-select="onDateSelect"
          inline
          :showWeek="true"
        />
        
        <div v-if="dateSelectionnee" class="mt-3 pt-3 border-t text-center">
          <small class="text-gray-600">
            Date sélectionnée : {{ formaterDate(dateSelectionnee) }}
          </small>
        </div>
      </OverlayPanel>
      
      <div v-if="dateSelectionnee" class="text-center p-3 bg-blue-50 rounded-lg w-full">
        <div class="text-sm text-gray-600">Vous avez sélectionné :</div>
        <div class="font-semibold text-lg">{{ formaterDate(dateSelectionnee) }}</div>
        <Button 
          label="Effacer" 
          size="small" 
          severity="secondary"
          @click="effacerDate"
          class="mt-2"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import OverlayPanel from 'primevue/overlaypanel'

const overlayPanel = ref()
const dateSelectionnee = ref<Date | null>(null)

const toggleCalendrier = (event: Event) => {
  overlayPanel.value.toggle(event)
}

const onDateSelect = () => {
  setTimeout(() => {
    overlayPanel.value.hide()
  }, 200)
}

const formaterDate = (date: Date): string => {
  return date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const effacerDate = () => {
  dateSelectionnee.value = null
}
</script>