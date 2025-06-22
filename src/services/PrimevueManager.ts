import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'
import type { App, Plugin } from 'vue'

const defaultPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{primevue.50}',
            100: '{primevue.100}',
            200: '{primevue.200}',
            300: '{primevue.300}',
            400: '{primevue.400}',
            500: '{primevue.500}',
            600: '{primevue.600}',
            700: '{primevue.700}',
            800: '{primevue.800}',
            900: '{primevue.900}',
        },
    },
    primitive: {
        primevue: {
            50: 'var(--color-primevue-50)',
            100: 'var(--color-primevue-100)',
            200: 'var(--color-primevue-200)',
            300: 'var(--color-primevue-300)',
            400: 'var(--color-primevue-400)',
            500: 'var(--color-primevue-500)',
            600: 'var(--color-primevue-600)',
            700: 'var(--color-primevue-700)',
            800: 'var(--color-primevue-800)',
            900: 'var(--color-primevue-900)',
        },
    },
    components: {
        button: {
            root: {
                borderRadius: 0
            }
        },
        inputtext: {
            root: {
                borderRadius: 0,
                borderColor: "#EE82EE"
            }
        }
    }
})

const PrimeVueManager: Plugin = {
    install(app: App<Element>) {
        app.use(PrimeVue, {
            theme: {
                preset: defaultPreset,
                options: {
                    cssLayer: {
                        name: 'primevue',
                        order: 'theme, base, primevue',
                    },
                    darkModeSelector: '.dark',
                },
            },
        })
    },
}

export default PrimeVueManager