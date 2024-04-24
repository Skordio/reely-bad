<template>
    <v-container id="james-bond-container" :class="mdAndDown ? 'px-12' : null" :="{...puzzleContainer}">
        <v-row>
            <v-col class="text-h3 pb-2">
                Inception (Reel 2)
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center mb-3">
            <v-col class="text-h6 d-flex flex-column">
                To implant an idea in someone’s mind is a delicate process involving the creation of dreams within dreams. 
                Only when these dreams are layered on top of each other is the message able to truly take root.
            </v-col>
        </v-row>
        <v-row class="w-100 d-flex justify-center">
            <v-col class="d-flex flex-1-1 justify-center" :cols="smAndDown ? '12' : '8'">
                <v-img src="images/inception/cw.png" :min-width="smAndDown ? '100vw' : ''"></v-img>
            </v-col>
        </v-row>
        <v-row class="d-flex w-100">
            <v-col cols="6" class="d-flex justify-center">
                <div class="d-flex flex-column">
                    <span class="text-h6">ACROSS</span>
                    <span v-for="clue in acrossClues">{{ clue }}</span>
                </div>
            </v-col>
            <v-col cols="6" class="d-flex justify-center">
                <div  class="d-flex flex-column">
                    <span class="text-h6">DOWN</span>
                    <span v-for="clue in downClues">{{ clue }}</span>
                </div>
            </v-col>
        </v-row>
        <v-row class="w-100 d-flex justify-center">
            <v-col class="d-flex flex-1-1 justify-center" :cols="smAndDown ? '12' : '8'">
                <v-img src="images/inception/wordsearch.png" :style="wordSearchStyle"  :min-width="smAndDown ? '100vw' : ''"></v-img>
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
import { isThemeDark } from '@/composables';

import { ref, computed } from 'vue';
import { useDisplay, useTheme } from 'vuetify';
const display = useDisplay()
const theme = useTheme()
const mdAndDown = computed(() => display.mdAndDown.value)
const smAndDown = computed(() => display.smAndDown.value)

const answer = ref(-935888308)

const dark = isThemeDark()

const wordSearchStyle = computed(() => {
    if (dark.value) {
        return {
            filter: 'invert(1)'
        }
    }
})

const acrossClues = [
    '1. Nintendo console',
    '4. Fish',
    '8. Red muppet',
    '12. “Big Blue”',
    '13. Singer Fitzgerald',
    '14. Rip',
    '15. Recipe meas.',
    '16. In ___ of',
    '17. Yield',
    '18. ___ rima (verse form)',
    '20. Short distance',
    '22. Santa ___ Valley, California',
    '23. Food thickener',
    '24. Relax',
    '27. Stockpile',
    '29. So ___ so forth: 2 wds.',
    '31. Buffaloes',
    '33. Nevertheless',
    '34. Dozed',
    '35. Singer Adams',
    '36. Father',
    '37. Poem',
    '39. Texts, briefly',
    '42. Largest continent',
    '43. Ruth’s mother-in-law',
    '44. Listen',
    '47. Pale',
    '49. ___-Mart',
    '50. French friend',
    '51. Close',
    '52. Schubert’s “The ___-King”',
    '53. ___ hoop',
    '54. Scandinavian capital',
    '55. Type of video game'
]

const downClues = [
    '1. Clever',
    '2. “Ghosts” playwright Henrik',
    '3. Wowed',
    '4. Actor Lugosi',
    '5. Boxing great',
    '6. Santa’s ride',
    '7. Hot spot',
    '8. ___ A Sketch',
    '9. Boy’s name',
    '10. Angry',
    '11. Raw rock',
    '19. Rock trio with notable beards',
    '21. Friend',
    '23. Donkey',
    '24. Machine to cut grass',
    '25. One ___ million: 2 wds.',
    '26. Big name in ice cream',
    '28. Wagers',
    '30. Lake in SE Africa',
    '31. Curr. of Bahamas',
    '32. Dockworker’s org.',
    '33. Curve',
    '35. Tendencies',
    '38. Stringed instrument',
    '40. Quick',
    '41. Window parts',
    '42. Region',
    '43. Singer/songwriter Laura',
    '44. Cry of discovery',
    '45. Outback bird',
    '46. Worry',
    '48. Actor Holbrook'
]

</script>