// lowest number give an array
function maxInArray(numbers){
    let largest = numbers[0]
    for(let i=0; i < numbers.length; i++){
       
        const index = i;
        const element =numbers[index];
        if(element < largest){
            largest = element;
        }
       
    }
    return largest;
    //console.log('hello')
}

const heights =[167,120,155,140,123,520];
const tallest = maxInArray(heights);
console.log(tallest);