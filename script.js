document.addEventListener("DOMContentLoaded", () => {

    generateWords();

});


function generateWords() {
    
    // Get an array of random words
    const wordCount = 3;
    let currentWords = [];

    // Add a random word to the `currentWords` array
    for (let i = 0; i < wordCount; i++) {
        currentWords.push(wordList[Math.floor(Math.random() * wordList.length)]);
    }


    // Add the words to the DOM
    const wordHtml = document.querySelector(".words");
    
    currentWords.forEach(word => {
        
        word.split("").forEach(letter => {


            // Add the letter to the DOM
            wordHtml.innerHTML += `<span class="unused">${letter}</span>`;

        });

        // Add a space after each word
        if (word !== currentWords[currentWords.length]) wordHtml.innerHTML += "<span>&nbsp;</span>";
    });


    // After the words are generated, start the test
    startTest(currentWords.join(" "));
}


let startTime;
let endTime;
let totalTime;
function startTest(words) {
    
    let index = 0;



    document.addEventListener("keydown", (e) => {

        // Start the timer when the first key is pressed
        if (index == 0) startTime = Date.now();

        // Update the index everytime a key is pressed
        index++;

        // Get the current letter in the HTML
        let htmlLetter = document.querySelectorAll(".words span")[index - 1];

        // Check for if they wanted to remove a letter
        if (e.key == "Backspace") {
            index--;

            // htmlLetter.classList.replace("unused", "correct");
            htmlLetter.classList.remove("correct");
            htmlLetter.classList.remove("inunused");
            htmlLetter.classList.add("unused");
            return;
        }

        // Check for what key they pressed
        if (e.key == words[index - 1]) htmlLetter.classList.replace("unused", "correct");
        else htmlLetter.classList.replace("unused", "incorrect");


        // End the test when we reach the end of the words
        if (index == words.length) {
            endTime = Date.now();
            
            // Calculate the WPM
            getResults(startTime, endTime, words);
        }

    });

}



function getResults(startTime, endTime, words) {
    
    // Get the word count and test time (in seconds)
    const wordCount = words.split(" ").length;
    const time = (endTime - startTime) / 1000;

    // Calculate the WPM
    const wpm = Math.round((wordCount / time) * 60);


    // Display it in the DOM
    document.querySelector("#testResults").innerHTML = wpm + " WPM";
}