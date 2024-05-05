<template>
    <v-container id="the-matrix-container" :="{...puzzleContainer}">
        <v-row>
            <v-col class="text-h3 pb-2">
                Scooby-Doo (Reel 1)
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col class="text-h6">
                Recently, the Hex Girls have been kidnapped by a witch. 
                They've left behind a series of perplexing clues with subtle hints embedded within. 
                It’s your task to fill out the puzzle and figure out the solution.
            </v-col>
        </v-row>
        <v-row class="w-100 d-flex justify-center">
            <v-col cols="auto" class="d-flex w-100"><v-img :src="imgSrc" min-width=""></v-img></v-col>
        </v-row>
        <v-row class="align-self-stretch">
            <v-col cols="12" class="d-flex flex-row flex-1-1">
                <answer-bar :="{answer}"></answer-bar>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { answerBar } from '@/components'
import { puzzleContainer } from './classes';
import { ref, computed } from 'vue';
import { useDisplay, useTheme } from 'vuetify';
import { isThemeDark } from '@/composables';
const display = useDisplay()

const mdAndDown = computed(() => display.mdAndDown.value)

const answer = ref(-1818901276)

const isDark = isThemeDark()

const imgSrc = computed(() => {
    if (isDark.value) {
        return 'images/scooby-doo/nonogram_darkmode.png'
    } else {
        return 'images/scooby-doo/nonogram_lightmode.png'
    }
})


</script>