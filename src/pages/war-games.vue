<template>
    <v-container id="war-games-container" :class="mdAndDown ? 'px-12' : null" :="{...puzzleContainer}">
        <v-row>
            <v-col class="text-h3 pb-2">
                WarGames (Reel 4)
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-col class="text-h6">
                David Lightman has long abandoned his days of trying to hack into government systems. 
                Instead, he has found himself a new challenge: trying to discover the deepest secrets of RIT. 
                He has spent countless hours of his time trying to find some mention of it in the vast expanse of Youtube videos created by the university. 
                So far he has found 11 videos that have stuck out to him, each containing some element of the final answer he is looking for, but he is struggling to find the one video that will <span class="font-italic">uniformly</span> combine the elements of all of them. 
                He knows once he does he will finally have the <span class="font-italic">resources</span> he needs to go there and <span class="font-italic">locate</span> the final missing piece.
            </v-col>
        </v-row>
        <v-row class="d-flex align-center">
            <v-col :cols="contentCols" class="d-flex flex-column align-center flex-1-1" >
                <div class="d-flex flex-column">
                    <a target="_" href="https://www.youtube.com/watch?v=DRPYsIAj1aU">RIT on TV: Red Cross Award</a>
                    <a target="_" href="https://www.youtube.com/watch?v=ixYaeRfTnrY">RIT Student Connecting People with 'Lines'</a>
                    <a target="_" href="https://www.youtube.com/watch?v=q-0HTPonFMA">RIT on TV: Community supports student</a>
                    <a target="_" href="https://www.youtube.com/watch?v=sUabHhIY2FA">RIT Expert: Thomas Gaborski, assistant professor, Kate Gleason College of Engineering</a>
                    <a target="_" href="https://www.youtube.com/watch?v=iPo4W0EWKiM">RIT on TV: Film about the Iroquois being made at RIT</a>
                    <a target="_" href="https://www.youtube.com/watch?v=ZBYugJK1LlI">RIT on TV: Preview of Imagine RIT on WUHF</a>
                    <a target="_" href="https://www.youtube.com/watch?v=I3k0vSA-gOE">Detecting Financial Health</a>
                    <a target="_" href="https://www.youtube.com/watch?v=l_6RBa8mgSs">Playtesting Night at GDC - hosted by RIT</a>
                    <a target="_" href="https://www.youtube.com/watch?v=LBIDZsRiRak">Master of Science in Data Analytics</a>
                    <a target="_" href="https://www.youtube.com/watch?v=ml3cHadtP8g">Capstone Experience: Julia Popowych '21 (Photojournalism)</a>
                    <a target="_" href="https://www.youtube.com/watch?v=yNT4A4gnfwQ">what is it like to be a student at RIT?</a>
                </div>
            </v-col>
            <v-col :cols="contentCols" class="d-flex flex-1-1 justify-center" >
                <v-img src="images/war-games/letters_with_colors.png" height="30vh" width="40vw" :max-width="mdAndDown ? '80vw' : '50vw'"></v-img>
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
import { computed, ref } from 'vue';
import { useDisplay } from 'vuetify';
import answerBar from '../components/answerBar.vue'
const display = useDisplay()
const mdAndDown = computed(() => display.mdAndDown.value)
const contentCols = computed(() => {
    if (display.mdAndDown.value) {
        return '12'
    } else {
        return '6'
    }
})

const answer = ref(1006425056)

</script>