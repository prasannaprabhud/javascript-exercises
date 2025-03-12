const repeatString = function(testString, testNum) {
    let teststr = '';
    for(let i = 0; i < testNum; i++){
        teststr += testString
    }
    return teststr;
};

// Do not edit below this line
module.exports = repeatString;


// separately tested code
// const repeatString = function(testString, testNum) {
//     let teststr = '';
//     for(let i = 0; i < testNum; i++){
//         teststr += testString
//     }
//     return console.log(teststr);
// };

// repeatString('hey', 4);

