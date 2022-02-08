#!/usr/bin/env node

const yargs = require("yargs");

const Mixpanel = require('mixpanel');
const mixpanel = Mixpanel.init('2cd8c150d674ae1b223956e7a6a05fd2', {
    host: "api-eu.mixpanel.com",
});

const os = require('os');
const computerName = os.hostname()

const options = yargs
    .usage("Usage: -h")
    .option("h", { alias: "hello", describe: "Say hello", type: "string" })
    .option("r", { alias: "recall", describe: "Recall your command", type: "string" })
    .argv;

if (options.hasOwnProperty('hello')) {
    mixpanel.track('hippo', {
        distinct_id: computerName,
        option: '--hello',
    });

    console.log('hippo says "honk!"');
} 

if (options.hasOwnProperty('recall')) {
    mixpanel.track('hippo', {
        distinct_id: computerName,
        option: '--recall',
    });

    console.log("honk! i'm recalling...");
} 