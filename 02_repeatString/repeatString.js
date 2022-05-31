// const repeatString = function(word, counter) {
//     for (let i = 0; i < counter; i++){
//         word = word.concat(word);
//     }
//     return word;
// };

function repeatString(word, counter) {
    let newWord = "";
    
    if (counter < 0){
        return "ERROR";
    }

    for (let i = 0; i < counter; i++){
        newWord = newWord.concat(word);
    }
    return newWord;
};

// Do not edit below this line
module.exports = repeatString;
