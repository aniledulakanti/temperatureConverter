
let userInputCelsuisElement = document.getElementById("firstNumber");
let FahrenheitElement = document.getElementById("secondNumber");
let temperatureResultElement = document.getElementById("temperatureResult");

function checkbutton() {
    let inputValue = parseFloat(userInputCelsuisElement.value);
    if (!isNaN(inputValue)) {
        let Fahrenheit = parseFloat(inputValue * (9 / 5) + 32) + "";
        FahrenheitElement.value = Fahrenheit;
        temperatureResultElement.style.backgroundColor = "green";
        temperatureResultElement.textContent = "Congratulations! You got it right ";
        temperatureResultElement.style.color = "#ffffff";
    } else {
        temperatureResultElement.style.backgroundColor = "#1e217c";
        temperatureResultElement.textContent = "Invalid Input! Please Try Again";
        temperatureResultElement.style.color = "#ffffff";
    }
}

function restartbutton() {
    userInputCelsuisElement.value = "";
    FahrenheitElement.value = "";
    temperatureResultElement.style.backgroundColor = "";
    temperatureResultElement.textContent = "";
}