<template>
    <v-container id="meta-puzzle-prompt-container" :="{...puzzleContainer}">
        <v-row>
            <v-col cols="auto" class="text-h2">
                This is Reel-y Bad
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="auto" class="text-h6">
                Oh no! It's the night before the big heist and Danny dropped all of the film reels. 
                He needs them to cover his tracks but they came unspooled. 
                Help Danny return the film back to their reels. 
                Also, please apply an exclusive coating to the film to act as a protective barrier against further damage. 
                Once done, quickly splice together the top clips from each to create the final edit.
            </v-col>
        </v-row>
        <v-row class="d-flex flex-wrap justify-center w-100">
            <v-col v-for="reel in reels" :cols="imgCols" class="d-flex flex-column flex-1-1 justify-center">
                <router-link :to="{name: reel.route}" class="d-flex flex-column flex-1-1" :title="reel.title">
                    <!-- <span>{{ reel.title }}</span> -->
                    <v-img :src="reel.src" :style="imageStyle"></v-img>
                </router-link>
            </v-col>
        </v-row>
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

const reels = [
    { title: 'Scooby Doo', src: 'images/reels/1.png', route: 'scooby-doo'},
    { title: 'Inception', src: 'images/reels/2.png', route: 'inception'},
    { title: 'James Bond', src: 'images/reels/3.png', route: 'james-bond'},
    { title: 'War Games', src: 'images/reels/4.png', route: 'war-games'},
    { title: 'Good Will Hunting', src: 'images/reels/5.png', route: 'good-will-hunting'},
    { title: 'The Matrix', src: 'images/reels/6.png', route: 'the-matrix'},
]
const answer = ref(1064526940)

import { computed, ref } from 'vue';
import { useDisplay } from 'vuetify';
const display = useDisplay()
const imgCols = computed(() => {
    if (display.mdAndDown.value) {
        return '4'
    } else {
        return 'auto'
    }
})

import { isThemeDark } from '@/composables';
const dark = isThemeDark()
const imageStyle = computed(() => {
    if (dark.value) {
        return 'filter: brightness(0.6)'
    } else {
        return ''
    
    }
})
</script>