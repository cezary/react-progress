module.exports = {
  entry: './index.js',
  output: {
    filename: './dist/react-progress.js',
    sourceMapFilename: './dist/react-progress.map',
    library: 'Progress',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'React',
    'react/addons': 'React'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: '6to5-loader'}
    ]
  }
};
