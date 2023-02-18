
function generateWords() {
    
    // Get an array of random words
    const wordCount = 30;
    let currentWords = [];

    // Add a random word to the `currentWords` array
    for (let i = 0; i < wordCount; i++) {
        currentWords.push(wordList[Math.floor(Math.random() * wordList.length)]);
    }


    // Add the words to the DOM
    const textContainer = document.querySelector(".text-wrapper");
    
    currentWords.forEach(word => {
        
        word.split("").forEach(letter => {

            // Add the letter to the DOM
            textContainer.innerHTML += `<span class="unused">${letter}</span>`;

        });

        // Add a space after each word
        if (word !== currentWords[currentWords.length]) textContainer.innerHTML += "<span>&nbsp;</span>";
    });
}





function fetchJson(url) {

    return fetch(url).then(response => response.json());
}