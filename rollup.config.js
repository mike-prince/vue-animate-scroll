import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'

export default {
  input: 'src/vue-animate-scroll.js',
  output: [
    {
      file: 'lib/vue-animate-scroll.es.js',
      format: 'es'
    },
    {
      file: 'lib/vue-animate-scroll.cjs.js',
      format: 'cjs'
    },
    {
      file: 'lib/vue-animate-scroll.js',
      format: 'iife',
      name: 'VueAnimateScroll'
    }
  ],
  plugins: [ uglify(), minify() ]
}
