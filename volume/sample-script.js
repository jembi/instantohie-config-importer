'use strict'

const fs = require('fs')
const path = require('path')

const configFile = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, 'sample-config.json'))
)

console.log('This is just a basic script to indicate how to run a nodejs file.')
console.log('Config File: ', configFile)
console.log('Environment Variable (SAMPLE_ENV_VARIABLE): ', process.env.SAMPLE_ENV_VARIABLE)