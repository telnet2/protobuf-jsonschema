#!/usr/bin/env node

var program = require('commander');
var compile = require('./');
var yaml = require('js-yaml');

program
    .version(require('./package.json').version)
    .arguments('<file...>')
    .option('-f, --format [format]', 'output format: json or yaml [json]', 'json')
    .option('-m, --model [model]', 'Protobuf Message')
    .action(function (args) {
        var format = program.format || 'json';
        var result = compile(args, program.model);

        if (format === 'json')
            process.stdout.write(JSON.stringify(result, false, 2) + '\n');
        // else if (format === 'yaml')
        //     process.stdout.write(yaml.dump(result, { noRefs: true }));
    })
    .parse(process.argv);
