#!/usr/bin/env node

const program = require("commander");
const fs = require('fs');
const helpers = require('./lib/helpers');
const clear = require('clear')
const CLI = require('clui');
const clc = require('cli-color');
const Line = CLI.Line;
const LineBuffer = CLI.LineBuffer;

clear();
program.version('0.0.1')
    .description("Commandline Utility");

program.command('ls [dir]')
    .description('List content of file')
    .action(((dir) => {
        dir = dir || '.';
        const fileList = fs.readdirSync(dir);

        const outputBuffer = new LineBuffer({
            x: 0,
            y: 0,
            width: 'console',
            height: 'console'
        });

        const header = new Line(outputBuffer)
            .column(`directories`, 20, [clc.cyan])
            .column(`files`, 20, [clc.cyan])
            .fill()
            .store();

        const dirs = []
        const files = []

        for (let item of fileList) {
            const isDir = helpers.isDirectory(item);
            if (isDir) {
                dirs.push(item)
            } else {
                files.push(item)
            }
        }
        const max = helpers.getMax(dirs, files);
        for (let i = 0; i < max; i++) {
            const dir = i < dirs.length ? dirs[i] : "";
            const file = i < files.length ? files[i] : "";
            new Line(outputBuffer)
                .column(dir, 20)
                .column(file, 20)
                .fill()
                .store();
        }
        return outputBuffer.output()
    }))

program.parse(process.argv)
