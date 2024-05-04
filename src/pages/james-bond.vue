<template>
    <v-container id="james-bond-container" :class="mdAndDown ? 'px-12' : null" :="{...puzzleContainer}">
        <v-row>
            <v-col class="text-h3 text-center pb-2">
                James Bond (Reel 3)
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center mb-3">
            <v-col class="text-h6 d-flex flex-column">
                <span>Rendezvous location for the nuclear weapons deal received, but remains encrypted.</span>
                <span>Secure the correct location before the weapons fall into the hands of the Spectre group.</span>
                <span>Analysis of intercepted transmissions will reveal the key location – it’s now or never. </span>
            </v-col>
        </v-row>
        <v-card :style="vCardStyle" class="d-flex flex-column align-center pa-3 mb-5 h-100 w-100 elevation-5" variant="tonal" >
            <v-row class="d-flex align-center mb-n14">
                <v-col class="text-green text-center" :class="headerTextClass">
                    INCOMING SECURE TRANSMISSION NO. 139-839-65537
                </v-col>
            </v-row>
            <v-row>
                <v-col class="font-weight-black text-h1 mt-n14 text-no-wrap">
                    _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _               
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex flex-column align-center mb-2" :class="numbersClass">
                    <div v-for="list in numbers" class="d-flex justify-center" style="gap:18px">
                        <span v-for="number in list">{{ number }}</span>
                    </div>
                </v-col>
            </v-row>
            <v-row class="w-100 d-flex justify-center" style="margin-top:-100px">
                <v-col class="d-flex flex-row justify-end" cols="12">
                    <v-img src="images/james-bond/spectre.png" :max-width="imgWidth" :height="imgWidth" class="ms-auto" :style="spectreStyle"></v-img>
                </v-col>
            </v-row>
        </v-card>
        <v-row class="align-self-stretch">
            <v-col cols="12" class="d-flex flex-row flex-1-1">
                <answer-bar :="{answer}"></answer-bar>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { puzzleContainer } from './classes';
import { answerBar } from '@/components'
import { isThemeDark } from '@/composables';

import { ref, computed } from 'vue';
import { useDisplay, useTheme } from 'vuetify';
const display = useDisplay()
const theme = useTheme()
const mdAndDown = computed(() => display.mdAndDown.value)
const smAndDown = computed(() => display.smAndDown.value)

const answer = ref(475390510)

const numbers = [
    ['92108', '93034', '111273'],
    ['35369', '3737', '57383'],
    ['93545', '3737', '37078'],
    ['93034', '35369', '35369'],
    ['92108', '18647', '111273'],
    ['83875', '61625', '33298'],
    ['3737', '80409', '113442'],
    ['61596', '61596', '61625'],
    ['111273', '111273', '61625'],
    ['113442', '46466', '18647'],
    ['96780']
]

const dark = isThemeDark()
const spectreStyle = computed(() => {
    if (dark.value) {
        return {
            filter: 'invert(0.9)'
        }
    }
})

// const vCardStyle = computed(() => {
//     if (mdAndDown.value) {
//         return {
//             'min-height': '500px',
//             'max-width': '80vw'
//         }
//     } else {
//         return {
//             'min-height': '430px',
//             'max-width': '50vw',
//         }
//     }
// })

const imgWidth = computed(() => {
    if (smAndDown.value) {
        return '50px'
    } else {
        return '100px'
    }
})

const vCardStyle = computed(() => {
    if (mdAndDown.value) {
        return {
            'min-height': '80vh',
            'max-width': '80vw'
        }
    } else {
        return {
            'min-height': '60vh',
            'max-width': '35vw'
        }
    }
})

const headerTextClass = computed(() => {
    if (mdAndDown.value) {
        return 'text-h4'
    } else {
        return 'text-h5'
    }
})

const numbersClass = computed(() => {
    if (mdAndDown.value) {
        return 'text-h5'
    } else {
        return 'text-h6'
    }
})

</script>