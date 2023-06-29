const testButton = () => {
    console.log("running test button function!");
    const button = document.querySelector('button[id="button"]');

    button.addEventListener(("click"), (e) => {
        button.textContent = `Click count: ${e.detail}`;
    });
}

const someText = () => {
    console.log("look someText() executed from text.js!");
}

const textFromEJS = () => {
    console.log("look textFromEJS() executed!");
}

module.exports = {
    testButton,
    someText,
    textFromEJS
}

// exports.SimpleMessage = "Hello world";
// exports.testButton