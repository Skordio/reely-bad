import { readonly, ref, watch } from "vue";
import { useTheme } from "vuetify";


export function isThemeDark() {
    const theme = useTheme()
    const isDark = ref(theme.current.value.dark)
    watch(() => theme.current.value.dark, (newVal) => {
        isDark.value = newVal
    })
    return readonly(isDark)
}