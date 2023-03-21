#!/usr/bin/env node
import { default as yargs } from 'yargs';
yargs
  .alias('p', 'password')
  .describe('p', 'your password')
  .alias('u', 'username')
  .describe('u', 'your username')
  .alias('h', 'help')
  .describe('h', 'this help')
  .version(require('./package.json').version, 'v')
  .alias('v', 'version')
  .usage('\nUsage:\n  $0 [url] [options]')
  .example('$0', 'update couch at http://127.0.0.1:5984')
  .example('$0 http://example.com -u username -p password', 'update with auth');

if (yargs.argv.h) {
  yargs.showHelp();
  return process.exit(0);
}

import('./index.js').then(addCorsToCouch =>
addCorsToCouch(yargs.argv._[0] || 'http://127.0.0.1:5984', 
(yargs.argv.p && yargs.argv.u) && yargs.argv.u + ':' + yargs.argv.p
).then(() => {
console.log('success');
process.exit(0);
},(err) => {
console.log(err);
process.exit(1);
}));