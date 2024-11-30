const {readFileSync, writeFileSync, read} = require('fs');

const first = readFileSync('./content/first.txt','ascii')
const second = readFileSync('./content/second.txt','ascii')

//console.log(first,second)
console.log('starting task')
writeFileSync(
    './content/result-sync.txt',
    `the result : ${first}, ${second} `,
    { flag: 'a'}

)
console.log('ending task')
console.log('moving to next task')