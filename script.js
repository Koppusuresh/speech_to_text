// Select DOM Elements
const btn = document.getElementById("btn");
const results = document.getElementById("result");

// Initialize Speech Recognition
const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

// Start Speech Recognition
function startSpeechRecognition() {
    recognition.start();
}

recognition.onstart = function () {
    console.log("You can speak now.");
    alert("Listening... Please speak into the microphone.");
};

recognition.onresult = function (event) {
    var text = event.results[0][0].transcript;
    console.log("Recognized text: ", text);
    results.innerText = text;
};

recognition.onerror = function (event) {
    console.error("Speech recognition error: ", event.error);
    alert("An error occurred during speech recognition: " + event.error);
};

recognition.onend = function () {
    console.log("Speech recognition ended.");
    alert("Speech recognition stopped.");
};

// Copy to Clipboard
function copyDivToClipboard() {
    const text = results.innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied the text: " + text);
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}
