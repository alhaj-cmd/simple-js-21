function wordReverse(text){
    const words = text.split(' ');
    const result = [];
    for (let i =words.length-1; i>=0; i--){
        const element=words[i];
        result.push(element);
    }
    const resulted =result.join(' ');
    return resulted;
}

const wordText = 'hello brother we have won the game';
console.log(wordReverse(wordText));
