// serial maintain
function reverseStr(text){
    for(let i =0; i<text.length; i++){
        const element = text[i];
        console.log(element);
    }
}  
const myString ='i am  a good boy';
const reverse =reverseStr(myString);
console.log(reverse);

// reverse way 

function reverseString(inputText){
    let reversed = '';
    for (let i = inputText.length-1; i>=0; i--){
        const element = inputText[i];
        reversed = reversed +element;
        console.log(element,reversed);

    }
    return reversed ;
}

const reverseText ='he is a not student';
const recevedText =reverseString(reverseText);
console.log(recevedText);