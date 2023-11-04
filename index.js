var celsius1 = document.getElementById("celsius1");
var fahrenheit1 = document.getElementById("fahrenheit1");
var kelvin1 = document.getElementById("kelvin1");

celsius1.oninput = function () { // celsius is a input type so oninput
    let f = (parseFloat(celsius1.value) * 9) / 5 + 32;
    fahrenheit1.value = parseFloat(f.toFixed(2)); // change to float and set the value to the faren

    let k = (parseFloat(celsius1.value) + 273.15);
    kelvin1.value = parseFloat(k.toFixed(2));
}
fahrenheit1.oninput = function () {
    let c = ((parseFloat(
        fahrenheit1.value) - 32) * 5) / 9;
    celsius1.value = parseFloat(c.toFixed(2));

    let k = (parseFloat(
        fahrenheit1.value) - 32) * 5 / 9 + 273.15;
    kelvin1.value = parseFloat(k.toFixed(2));
}
kelvin1.oninput = function () {
    let f = (parseFloat(
        kelvin1.value) - 273.15) * 9 / 5 + 32;
    fahrenheit1.value = parseFloat(f.toFixed(2));

    let c = (parseFloat(kelvin.value) - 273.15);
    celsius1.value = parseFloat(c.toFixed(2));
}