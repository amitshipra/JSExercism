//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
    if(input === ''){
        return 'Sure'
    }
    var len = input.length
    if(input === input.toUpperCase){
        return "Whoa, chill out!"
    }
    if(input.substr(len -1 ) === '?'){
        return 'Sure.'
    }
    return 'Whatever.'
};

module.exports = Bob;
