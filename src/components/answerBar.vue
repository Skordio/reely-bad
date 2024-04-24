<template>
    <v-fade-transition>
        <v-text-field 
            :bg-color="bgColor" 
            v-model="answerInput" 
            label="Your Answer" 
            class="me-4" 
            variant="solo-filled"
            @keydown.enter="checkAnswer"
        ></v-text-field>
    </v-fade-transition>
    <v-btn 
        @click="checkAnswer" 
        style="min-height:58px" 
        variant="tonal"
    >Check Answer</v-btn>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { stringHash } from '@/scripts';

const props = defineProps({
    answer: Number
})

function normalize(inputString: string) { 
    let normalized = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return normalized
} 

const answerInput = ref('')
const bgColor = ref('')

const checkAnswer = () => {
    if (stringHash(normalize(answerInput.value)) === props.answer!) {
        bgColor.value = 'success'
    } else {
        bgColor.value = 'error'
    }
    setTimeout(() => {
        bgColor.value = ''
    }, 1500)
}

</script>