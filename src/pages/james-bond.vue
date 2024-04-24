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
        <v-card class="d-flex flex-column align-center pa-3 mb-5 rounded elevation-5" variant="tonal" :style="vCardStyle">
            <v-row class="d-flex align-center">
                <v-col class="text-green text-h6 text-center">
                    INCOMING SECURE TRANSMISSION NO. 139-839-65537
                </v-col>
            </v-row>
            <v-row>
                <v-col class="font-weight-black text-h5 mt-n8 text-no-wrap">
                    _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _               
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex flex-column align-center mb-2">
                    <div v-for="number in numbers">{{ number }}</div>
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
    57383,
    93545,
    93545,
    3737,
    39049,
    18821,
    93545,
    93545,
    34022,
    57383,
    71751,
    18821
]

const dark = isThemeDark()
const spectreStyle = computed(() => {
    if (dark.value) {
        return {
            filter: 'invert(0.9)'
        }
    }
})

const vCardStyle = computed(() => {
    if (mdAndDown.value) {
        return {
            'min-height': '500px',
            'max-width': '80vw'
        }
    } else {
        return {
            'min-height': '430px',
            'max-width': '50vw',
        }
    }
})

const imgWidth = computed(() => {
    if (smAndDown.value) {
        return '50px'
    } else {
        return '100px'
    }
})

</script>