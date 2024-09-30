module.exports = {
  layout: 'base.njk',
  permalink: '/index.html',
  eleventyComputed: {
    newProjects: function (data) {
      return data.allProjects
    },

    successfulProjects: function (data) {
      return data.allProjects
    },

    successfulAuthors: function (data) {
      return data.allPersons
    }
  }
}