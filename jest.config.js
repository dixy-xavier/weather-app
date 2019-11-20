module.exports = {
  verbose: true,
  testMatch: ['<rootDir>/**/**.test.js'],
  moduleNameMapper: {
    '\\.(css|less|png)$': 'identity-obj-proxy',
  },
  setupFiles: ['./jest.setup.js'],
  transformIgnorePatterns: ['/node_modules/'],
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': './file-transformer.js',
    '^.+\\.js$': 'babel-jest',
  }
};
