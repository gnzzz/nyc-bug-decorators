'use strict';

const { parserPlugins } = require('@istanbuljs/schema').defaults.nyc;

module.exports = {
  all: true,
  cache: false,
  compact: false,
  parserPlugins: [
    'typescript',
    ['decorators', { legacy: false, decoratorsBeforeExport: true }],
    ...parserPlugins,
  ],
};
