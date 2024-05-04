<template>
    <v-container id="good-will-hunting-container" :="{...puzzleContainer}">
        <v-row>
            <v-col class="text-h3 pb-2">
                Good Will Hunting (Reel 5)
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col class="text-h6">
                Step into the intellectual arena where numbers reign supreme, where the essence of 'Good Will Hunting' beckons daring minds. 
                Behold the sudoku's intricate grid, a playground of enigmatic possibilities. 
                Yet, beyond its surface lies a deeper mystery, a puzzle encoded within.  
                Remember: every calculation holds significance, you'll have to be absolutely determined. 
                As you navigate this labyrinth of intellect, let intuition be your compass, guiding you towards the ultimate revelation.
            </v-col>
        </v-row>
        <v-row class="d-flex align-center">
            <v-col cols="auto">
                <v-table>
                    <tr v-for="(row, i) in sudoku" :key="i">
                        <td v-for="(cell, j) in row" :key="j" >
                            <div class="border-sm px-3 py-1 text-h6" :class="bgClass(i, j)">
                                <span :style="cell === 0 ? 'visibility: hidden' : null">{{ cell }}</span>
                            </div>
                        </td>
                    </tr>
                </v-table>
            </v-col>
            <v-col class="text-h6" cols="auto">
                X
            </v-col>
            <v-col cols="auto">
                <v-table>
                    <tr v-for="(row, i) in multiplyArray" :key="i">
                        <td v-for="(cell, j) in row" :key="j" >
                            <div class="border-sm px-3 py-2 text-h6" :class="bgClass(i, j)">
                                <span>{{ cell }}</span>
                            </div>
                        </td>
                    </tr>
                </v-table>
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
import { answerBar } from '@/components'
import { puzzleContainer } from './classes';
import { ref, computed } from 'vue';
import { useDisplay, useTheme } from 'vuetify';
import { isThemeDark } from '@/composables';
const display = useDisplay()

const mdAndDown = computed(() => display.mdAndDown.value)

const answer = ref(1467159782)


const sudoku = [
    [0, 0, 0, 0, 0, 0, 0, 8, 9],
    [4, 0, 5, 0, 0, 8, 1, 0, 0],
    [8, 0, 0, 0, 2, 0, 5, 0, 4],
    [0, 0, 0, 2, 7, 0, 0, 9, 0],
    [0, 8, 0, 9, 0, 0, 0, 0, 3],
    [9, 3, 7, 5, 0, 6, 0, 2, 0],
    [0, 4, 0, 6, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 4, 5],
    [1, 0, 6, 0, 0, 0, 0, 0, 0]
];

const multiplyArray = [
    [0.45536663, 0.45217853, 0.3921006],
    [0.1487779, 0.15940489, 0.13744244],
    [0.20510096, 1.2911796, 1.84661707]
]


// Theme things for dark vs light theme
const themeIsDark = isThemeDark()
const lighterColor = computed(() => {
    if (!themeIsDark.value) {
        return 'bg-grey-lighten-2'
    } else {
        return 'bg-grey-darken-2'
    }
})

const darkerColor = computed(() => {
    if (!themeIsDark.value) {
        return 'bg-grey-lighten-1'
    } else {
        return 'bg-grey-darken-3'
    }
})

const bgClass = (i: number, j: number) => {
    if (i < 3) {
        if (j < 3) {
            return lighterColor.value
        } else if (j < 6) {
            return darkerColor.value
        } else {
            return lighterColor.value
        }
    } else if (i < 6) {
        if (j < 3) {
            return darkerColor.value
        } else if (j < 6) {
            return lighterColor.value
        } else {
            return darkerColor.value
        }
    } else {
        if (j < 3) {
            return lighterColor.value
        } else if (j < 6) {
            return darkerColor.value
        } else {
            return lighterColor.value
        }
    }

}

</script>
