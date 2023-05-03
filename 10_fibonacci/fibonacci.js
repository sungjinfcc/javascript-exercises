const fibonacci = function(index) {
    let result = 1;
    let firstNum = 1;
    let secondNum = 1;
    if(index<0){
        return "OOPS";
    }
    for(let i = 1; i<index-1; i++){
        result += firstNum;
        firstNum = secondNum;
        secondNum = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
