#!/usr/bin/env node

const yargs = require("yargs");

const options = yargs
 .usage("Usage: -h")
 .option("h", { alias: "hello", describe: "Say hello", type: "string" })
 .argv;

console.log('hippo says "honk!"');