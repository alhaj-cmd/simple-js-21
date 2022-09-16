const lyrices = 'tumi bondhu kala pakhi ami jano ki';
const searchText ="pakhi"
// const doesExit = lyrices.includes('ami');
const doesExit = lyrices.includes(searchText);

const doesExitOneLine = lyrices.toLowerCase().includes(searchText.toLowerCase())
console.log(doesExitOneLine);
console.log(doesExit);

// ------------------ indexOf used
// -------------------
console.log(lyrices.indexOf('ami'))

// startWith
console.log(lyrices.startsWith('2mi'));

// endWith

const firstFile = 'data.png';
console.log(firstFile.endsWith('web'));
const secondFile = 'file.jpg';
