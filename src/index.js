const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const codesArray = [];

    for (let i = 0; i < expr.length; i = i + 10) {
        codesArray.push(expr.slice(i, i + 10));
    }

    console.log(codesArray);

    const arrayDotsDashes = codesArray.map((element) => {
        if (element === '**********') {
            return ' ';
        }

        let codeString = '';

        for (let i = 0; i < element.length; i = i + 2) {
            if (element[i] === '1' & element[i + 1] === '0') {
                codeString += '.';
            } else if (element[i] === '1' & element[i + 1] === '1') {
                codeString += '-';
            } else if (element[i] === '*') {
                codeString += element[i] + element [i + 1];
            }
        }

        return codeString;
    } )

    const decodedArray = arrayDotsDashes.map((element) => {
        if (element === ' ') {
            return element;
        }
        
        for (key in MORSE_TABLE) {
            if (element === key) {
                return MORSE_TABLE[key];
            }
        }
        
    })

    return decodedArray.join('');
}

module.exports = {
    decode
}