module.exports = {
    plugins: [
      {
        use: '@gridsome/source-filesystem',
        options: {
          path: 'docs/**/*.md',
          typeName: 'DocPage'
        }
      }
    ]
  }
