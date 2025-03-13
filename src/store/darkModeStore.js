import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useDarkModeStore = defineStore("darkMode", () => {
  const isDarkMode = ref(localStorage.getItem("theme") === "dark");

  // Function to Toggle Dark Mode
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    updateTheme();
  };

  // Apply Dark Mode to <html> Element
  const updateTheme = () => {
    if (isDarkMode.value) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Watch for changes and apply the theme
  watch(isDarkMode, updateTheme, { immediate: true });

  return { isDarkMode, toggleDarkMode };
});
