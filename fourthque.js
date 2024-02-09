//-------------Problem Number-04-------/////
function  findingBadData(numbers, index, Bad_data) {
    if (index < numbers.length) {
        if (numbers[index] < 0) {
            Bad_data++;
        } 
        return  findingBadData(numbers, index + 1, Bad_data);
    } else {
        return {Bad_data};
    }
}
//let numbers=[2, -5, -7, -13]
//let counts =  findingBadData(numbers, 0, 0);
 //console.log(counts.Bad_data);

/// negative number- the condition number <0 checks if the number is negative.