const letter1 = document.getElementById('letter1');
const letter2 = document.getElementById('letter2');
const letter3 = document.getElementById('letter3');
const letter4 = document.getElementById('letter4');
const letter5 = document.getElementById('letter5');
const possibleWords = document.getElementById('possible-words');

const wordList = [
    "angst", "atmen", "beten", "bombe", "danke",
    "draht", "druck", "drück", "farbe", "fehlt",
    "ferse", "kabel", "knall", "knapp", "knopf",
    "leere", "legal", "lehre", "mathe", "matte",
    "panik", "pieps", "rauch", "ruhig", "saite",
    "sehne", "seite", "sende", "strom", "super",
    "timer", "übrig", "verse", "warte", "zange"
];

const tempFilteredWords = [];
var filteredWords = [];

letter1.addEventListener('input', () => {
    if(letter1.value.length > 4) {
        letter2.focus();
    }
    filterWords();
});
letter2.addEventListener('input', () => {
    if(letter2.value.length > 4) {
        letter3.focus();
    }
    filterWords();
});
letter3.addEventListener('input', () => {
    if(letter3.value.length > 4) {
        letter4.focus();
    }
    filterWords();
});
letter4.addEventListener('input', () => {
    if(letter4.value.length > 4) {
        letter5.focus();
    }
    filterWords();
});
letter5.addEventListener('input', () => {
    if(letter5.value.length > 4) {
        possibleWords.focus();
    }
    filterWords();
});

function filterWords() {
    filteredWords = wordList;
    tempFilteredWords.length = 0;

    if (letter1.value != '') {
        for (i = 0; i < filteredWords.length; i++) {
            if (letter1.value.includes(filteredWords[i][0])) {
                tempFilteredWords.push(filteredWords[i]);
            }
        }
        filteredWords = [...tempFilteredWords];
        tempFilteredWords.length = 0;
    }

    if (letter2.value != '') {
        for (i = 0; i < filteredWords.length; i++) {
            if (letter2.value.includes(filteredWords[i][1])) {
                tempFilteredWords.push(filteredWords[i]);
            }
        }
        filteredWords = [...tempFilteredWords];
        tempFilteredWords.length = 0;
    }

    if (letter3.value != '') {
        for (i = 0; i < filteredWords.length; i++) {
            if (letter3.value.includes(filteredWords[i][2])) {
                tempFilteredWords.push(filteredWords[i]);
            }
        }
        filteredWords = [...tempFilteredWords];
        tempFilteredWords.length = 0;
    }

    if (letter4.value != '') {
        for (i = 0; i < filteredWords.length; i++) {
            if (letter4.value.includes(filteredWords[i][3])) {
                tempFilteredWords.push(filteredWords[i]);
            }
        }
        filteredWords = [...tempFilteredWords];
        tempFilteredWords.length = 0;
    }

    if (letter5.value != '') {
        for (i = 0; i < filteredWords.length; i++) {
            if (letter5.value.includes(filteredWords[i][4])) {
                tempFilteredWords.push(filteredWords[i]);
            }
        }
        filteredWords = [...tempFilteredWords];
        tempFilteredWords.length = 0;
    }

    possibleWords.innerHTML = filteredWords.join(", ");
}

window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        resetAll()
    }
});

function resetAll() {
    letter1.value = '';
    letter2.value = '';
    letter3.value = '';
    letter4.value = '';
    letter5.value = '';

    possibleWords.innerHTML = '';
    letter1.focus();
}
