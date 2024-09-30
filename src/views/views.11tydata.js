module.exports = {
  eleventyComputed: {
    allProjects: function (data) {
      const { collections } = data
      const { projects } = collections
      return projects
      .map((p) => {
          return {
            title: p.data.title,
            summary: p.data.summary,
            progress: p.data.progress,
            duration: p.data.duration,
            src: `${p.filePathStem.replace(/index$/, 'covers')}/${p.data.covers.card.src}`,
            alt: p.data.covers.card.alt,
          }
        })
    },
  }
}