import transformerCompileClass from '@unocss/transformer-compile-class'
import transformerDirectives from '@unocss/transformer-directives'
import presetWebFonts from '@unocss/preset-web-fonts'
import { defineConfig, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: ['Source Han Sans VF'],
        serif: ['Source Han Serif VF'],
        elegant: ['lxgw'],
      },
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerCompileClass()],
  theme: {
    colors: {},
  },
  safelist: getSafeList(),
})

function getSafeList() {
  return []
}
