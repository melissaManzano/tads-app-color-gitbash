// =========================================================
// ELEMENTOS
// =========================================================

// Comentario de prueba

const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");


const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");


const colorBox = document.getElementById("colorBox");

const rgbCode = document.getElementById("rgbCode");
const hexCode = document.getElementById("hexCode");

const resetButton = document.getElementById("resetButton");



// =========================================================
// CONVERTIR DECIMAL A HEXADECIMAL
// =========================================================

function toHex(value) {

    let hex = Number(value).toString(16);

    if (hex.length < 2) {
        hex = "0" + hex;
    }

    return hex;
}



// =========================================================
// VALIDAR VALORES
// =========================================================

function validateValue(value) {

    if (value === "") {
        return 0;
    }

    value = Number(value);


    if (isNaN(value)) {
        return 0;
    }


    if (value < 0) {
        value = 0;
    }


    if (value > 255) {
        value = 255;
    }


    return Math.round(value);
}



// =========================================================
// ACTUALIZAR COLOR
// =========================================================

function updateColor() {

    const r = validateValue(red.value);
    const g = validateValue(green.value);
    const b = validateValue(blue.value);


    const rgb = `rgb(${r}, ${g}, ${b})`;


    const hex =
        "#" +
        toHex(r) +
        toHex(g) +
        toHex(b);


    colorBox.style.backgroundColor = rgb;

    rgbCode.textContent = rgb;

    hexCode.textContent = hex.toUpperCase();


    colorBox.style.boxShadow =
        `0 18px 40px rgba(${r}, ${g}, ${b}, 0.22)`;
}



// =========================================================
// SLIDERS
// =========================================================

red.addEventListener("input", function () {

    redInput.value = red.value;

    updateColor();

});


green.addEventListener("input", function () {

    greenInput.value = green.value;

    updateColor();

});


blue.addEventListener("input", function () {

    blueInput.value = blue.value;

    updateColor();

});



// =========================================================
// INPUTS NUMÉRICOS
// =========================================================

redInput.addEventListener("input", function () {

    const value = validateValue(redInput.value);

    red.value = value;

    updateColor();

});


greenInput.addEventListener("input", function () {

    const value = validateValue(greenInput.value);

    green.value = value;

    updateColor();

});


blueInput.addEventListener("input", function () {

    const value = validateValue(blueInput.value);

    blue.value = value;

    updateColor();

});



// =========================================================
// CORREGIR VALORES AL SALIR DEL INPUT
// =========================================================

redInput.addEventListener("change", function () {

    const value = validateValue(redInput.value);

    redInput.value = value;
    red.value = value;

    updateColor();

});


greenInput.addEventListener("change", function () {

    const value = validateValue(greenInput.value);

    greenInput.value = value;
    green.value = value;

    updateColor();

});


blueInput.addEventListener("change", function () {

    const value = validateValue(blueInput.value);

    blueInput.value = value;
    blue.value = value;

    updateColor();

});



// =========================================================
// RESTABLECER
// =========================================================

resetButton.addEventListener("click", function () {

    red.value = 0;
    green.value = 0;
    blue.value = 0;


    redInput.value = 0;
    greenInput.value = 0;
    blueInput.value = 0;


    updateColor();

});



// =========================================================
// INICIALIZACIÓN
// =========================================================

updateColor();