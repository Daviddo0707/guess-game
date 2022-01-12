export const hideRandomLetters = (word: string) => {
    let indexArr = Array.from(Array(word.length).keys());
    let splittedWord = word.split('');
    const numberOfLettersToHide = Math.floor(word.length / 3);
    for (let i = 0; i < numberOfLettersToHide; i++) {
        const randomPos = indexArr[Math.floor(Math.random() * indexArr.length)];
        indexArr.splice(randomPos, 1)
        if (splittedWord[randomPos] === ' ') {
            i -= 1;
        } else {
            splittedWord[randomPos] = "_"
        }
    }

    return splittedWord.join('')

}

export const removeSpecials = (str: string) => {
    return str.replace(/[^a-z0-9A-Z ]/g, "")
};

