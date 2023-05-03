const palindromes = function (string) {
    const newStringArray = string.replace(/[\s,.;:!?]+/g, '').toLowerCase();
    const length = newStringArray.length;
    for(let i=0; i<length/2; i++){
        if(newStringArray[i] !== newStringArray[length-i-1]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
