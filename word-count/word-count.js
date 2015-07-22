/**
 * Created by dias on 15-07-22.
 */

var words = function (sentence){

    var arr = sentence.trim().split(/[\n\r\s]+/)
    var count = {}

    for (idx in arr){
        var elem = arr[idx]
        if (elem in count){
            var value = count[elem];
            if(isNaN(value)){
                value = 0
            }
            count[elem] = value + 1
        }else{
            count[elem] = 1
        }
    }
    return count
}

module.exports=words

words("reserved words like prototype and toString ok?")