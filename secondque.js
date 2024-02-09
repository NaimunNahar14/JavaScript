//----------Problem-02------///
function evenOdd(string) {
if(typeof string  == 'string'){
    if(string.length % 2 === 0){
        return('even');
    }
    else{
        return('odd');
    }
}
else{
    console.log('enter a string variable');
}
}
//const final = evenOdd("Batch7");
//console.log(final);

/// string and length- the length or size of a string means the total number of characters present in it.
/// even and odd- number % 2 == 0 checks whether the number is even .if the remainder is 0, the number is even .