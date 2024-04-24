

<template>
	<v-theme-provider :theme="currentTheme">
		<v-app style="height: 100vh; width: 100vw;position: absolute;top:0px;left:0px">
			<v-layout>
				<v-app-bar :flat="true" density="compact">
					<v-container fluid class="pa-0">
						<v-row>
							<v-col cols="12" class="d-flex justify-start">
								<v-btn @click="toggleTheme" class="mx-3">{{ themeButtonText }}</v-btn>
								<v-btn v-if="!onHomeRoute" @click="goHome" class="mx-3">Back</v-btn>
							</v-col>
						</v-row>
					</v-container>
				</v-app-bar>
				<v-main class="d-flex justify-center align-center">
					<v-scroll-x-transition>
						<router-view>
						</router-view>
					</v-scroll-x-transition>
				</v-main>
			</v-layout>
		</v-app>
	</v-theme-provider>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useLocalStorage } from '@vueuse/core'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { useTheme } from 'vuetify'

//Routing stuff
const route = useRoute()
const router = useRouter()

const onHomeRoute = computed(() => route.name === 'home')

const goHome = () => {
  router.push({ name: 'home' })
}


// Theme stuff
const currentTheme = useLocalStorage('theme', 'light')

const themeButtonText = computed(() => {
  return currentTheme.value === 'dark' ? 'Light Theme' : 'Dark Theme'
})

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'

}
</script>