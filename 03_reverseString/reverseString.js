const reverseString = function(word) {
    let test = '';
    for(let i = 1; i <= word.length; i++){
        test = test + word[word.length-i];
    }
    return test;
};

// Do not edit below this line
module.exports = reverseString;
