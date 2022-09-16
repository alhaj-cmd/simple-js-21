let first = 21;
let second = 54;

// apporach 1
const num = first;
 first =second;
 second = num;

 // apporach 2
 [first, second]= [second,first]
 console.log(first,second)
