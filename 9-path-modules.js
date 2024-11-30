const path = require('path');

console.log(path.sep)

//returns path when we enter folder names as strings it joins 
const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath)
//to get the base file name from a given path 
const base = path.basename(filePath)
console.log(base)
//resolves path (idk wtf it means or why its used just to remove extra slashes i guess??)
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)