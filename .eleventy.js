module.exports = function (config) {
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