#!/usr/bin/env node

const fs = require('fs');

fs.readFile('ascii.txt', (err, data) => {
    if(err){
        console.error(err)
    } else {
        let asciiArr = data.toString().split('\n');
        let ascii = asciiArr[Math.floor(Math.random() * asciiArr.length)];
        console.log(ascii);
    };
})
