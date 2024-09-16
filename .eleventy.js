const path = require('path')
const EleventyVitePlugin = require('@11ty/eleventy-plugin-vite')

module.exports = function (config) {

  config.setServerOptions({

  })

  config.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      appType: 'mpa',

      server: {
        mode: 'development',
        middlewareMode: true,
      },

      build: {
        mode: 'production',
      },

      resolve: {
        alias: {
          '/styles': path.resolve('.', 'src/styles')
        }
      }
    }
  })

  config.addPassthroughCopy('src/robots.txt')
  config.addPassthroughCopy('src/fonts')

  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: 'layouts',
      includes: 'includes',
      data: 'data', 
    },
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: false,
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
    templateFormats: ['md', 'njk']
  }
}