import { defineConfig, presetWind, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify(),
    presetIcons()
  ]
})