let wordList = [];

document.addEventListener("DOMContentLoaded", async () => {

    // Get all of the words
    //TODO: Make `words` a constant
    wordList = await fetchJson("https://random-word-api.herokuapp.com/all");

    // Start a new test
    generateWords();

});




function generateWords() {
    
    // Get an array of random words
    const wordCount = 100;
    let currentWords = [];

    // Add a random word to the `currentWords` array
    for (let i = 0; i < wordCount; i++) {
        currentWords.push(wordList[Math.floor(Math.random() * wordList.length)]);
    }


    // Add the words to the DOM
    const textContainer = document.querySelector(".text-wrapper");
    
    currentWords.forEach(word => {
        
        let wordHtml = "";

    });
}





function fetchJson(url) {

    return fetch(url).then(response => response.json());
}