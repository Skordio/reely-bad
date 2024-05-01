<template>
    <v-container id="the-matrix-container" :="{...puzzleContainer}">
        <v-row>
            <v-col class="text-h3 pb-2">
                The Matrix (Reel 6)
            </v-col>
        </v-row>
        <v-row class="d-flex align-center">
            <v-col :cols="mdAndDown ? '12': '6'" class="text-subtitle-1 d-flex flex-column" style="gap:18px">
                <div>
                    “This... all of this... it's a lot to take in. 
                    You're telling me that everything, every moment up until now was just... artificial? Fabricated?” 
                </div>
                <div>
                    “Yes, Neo,” I said, “you’ve lived your whole life in a place where the only reality you know is artificially crafted and force fed to you. 
                    If you had lived your whole life only allowed to see shadows, you would believe that was all there was.” 
                </div>

                <!-- <div>
                    “But if that's all been a lie, what does that say about what I've actually lived?” he said.
                </div>
                <div>
                    “What you lived in the Matrix was merely a shadow, designed to obscure the deeper truth. 
                    Your experiences, while real to you, were part of a grander illusion.”
                </div>
                <div>
                    “Then, is this reality now, the true reality?” he asked.
                </div>
                <div>
                    “That depends,” said I, “on your willingness to see beyond what is shown and to question everything anew. 
                    The journey towards the truth is not about finding the ultimate reality, 
                    but about shedding the layers of falsehoods we've been cloaked in. 
                    This journey, your journey, is only just beginning.”
                </div> -->
                <div class="text-center">...</div>
                <div>
                    “We’ve discovered an important code,” I said, 
                    “but deciphering it is beyond our current understanding. 
                    We must consult with a higher wisdom.”
                </div>
                <div class="font-italic">
                    They visit the Oracle, a serene figure surrounded by an air of mystery. 
                    However, her response leaves them just as puzzled as before:
                </div>
            </v-col>
            <v-divider :vertical="!mdAndDown" :style="mdAndDown ? '' : 'min-height:60vh'" :class="!mdAndDown ? 'my-auto' : ''"></v-divider>
            <v-col :cols="mdAndDown ? '12': '6'" class="d-flex flex-column align-center justify-center text-center text-h5">
                <div class="mb-6">
                    Seek an ancient archive where heroes' wisdom is kept. 
                    Only in the writings of one who realized the nature of the veil will your path be cleared. 
                    There, amidst the dialogue of sages, lies the connection.
                </div>
                <div v-for="number in numbers">{{ number }}</div>
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

const answer = ref(106440722)

const numbers = [
    '5331481',
    '5331541',
    '5335955',
    '333730',
    '333747'
]


</script>