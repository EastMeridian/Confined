/* eslint-disable import/no-extraneous-dependencies */
const { defaults } = require('jest-config');

module.exports = {
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'png'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
