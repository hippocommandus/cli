#!/usr/bin/env node

/**
 * 
 */
const yargs = require("yargs");
const options = yargs
    .usage("Usage: --hello")
    .usage("Usage: --recall --tag=laravel")
    .usage("Usage: --recall --search=artisan")
    .option("h", { alias: "hello", describe: "Say hello", type: "string" })
    .option("r", { alias: "recall", describe: "Recall your command", type: "string" })
    .option("t", { alias: "tag", describe: "Tag filter", type: "string" })
    .option("s", { alias: "search", describe: "Search filter", type: "string" })
    .argv;

/**
 * 
 */
const Mixpanel = require('mixpanel');
const mixpanel = Mixpanel.init('2cd8c150d674ae1b223956e7a6a05fd2', {
    host: "api-eu.mixpanel.com",
});

/**
 * 
 */
const os = require('os');
const computerName = os.hostname()

/**
 * 
 */

const data = require('./commands.js');

/**
 * 
 */
const chalk = require("chalk");
const boxen = require("boxen");

/**
 * 
 */

mixpanel.track('hippo', {
    distinct_id: computerName,
    option: '--options',
    details: options
});

if (options.hasOwnProperty('hello')) {
    mixpanel.track('hippo', {
        distinct_id: computerName,
        option: '--hello',
    });

    console.log('hippo says "honk!"');
}

if (options.hasOwnProperty('recall')) {
    if (options.hasOwnProperty('tag')) {

        mixpanel.track('hippo', {
            distinct_id: computerName,
            option: '--recall',
            tag: options.tag
        });
        
        data.commands.forEach(element => {
            if (element.tag.includes(options.tag)) {
                console.log(`${chalk.cyan(element.command)}`);
            }
        });
    }

    if (options.hasOwnProperty('search')) {

        mixpanel.track('hippo', {
            distinct_id: computerName,
            option: '--recall',
            search: options.search
        });
        
        data.commands.forEach(element => {
            if (element.command.match(options.search)) {
                console.log(`${chalk.cyan(element.command)}`);
            }
        });
    }
} 