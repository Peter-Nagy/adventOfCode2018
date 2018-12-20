const readFile = require('./utils');

const input = readFile('1.txt');

function day1(lines) {
    const alreadySeenFrequency = {
        0: true,
    };
    let frequency = 0;
    while(true) {
        for (let i = 0; i < lines.length; i++) {
            const element = Number(lines[i]);
            frequency += element;
            if(alreadySeenFrequency[frequency]) {
                return frequency;
            }
            alreadySeenFrequency[frequency] = true;
        }
    }
}

console.log(day1(input));