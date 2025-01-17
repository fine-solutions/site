const constants = require('../../config/constants.js')

module.exports = {
  isNotMainPage: true,

  eleventyComputed: {
    constants: function () {
      return constants
    },

    allProjects: function (data) {
      const { collections } = data
      const { projects } = collections
      return projects
      .map((p) => {
          return {
            title: p.data.title,
            summary: p.data.summary,
            progress: p.data.indicators[0].value,
            duration: p.data.indicators[0].max,
            src: p.data.covers ? `${p.filePathStem.replace(/index$/, 'covers')}/${p.data.covers.card.src}` : null,
            alt: p.data.covers?.card.alt,
            link: `${p.filePathStem}.html`,
          }
        })
    },

    allPersons: function (data) {
      const { collections } = data
      const { people } = collections
      return people
      .map((p) => {
          return {
            name: p.data.name,
            src: p.data.avatar ? `${p.filePathStem.replace(/index$/, 'images')}/${p.data.avatar}` : null,
            link: `${p.filePathStem}.html`,
          }
        })
    },
  }
}