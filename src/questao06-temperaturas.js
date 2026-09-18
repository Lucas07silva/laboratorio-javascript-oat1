function celsiusParaFahrenheit(celsius) {
    if (typeof celsius !== "number") {
        return "O valor deve ser numérico";
    }

    const fahrenheit = (celsius * 1.8) + 32;

    return Number(fahrenheit.toFixed(2));
}

function fahrenheitParaCelsius(fahrenheit) {
    if (typeof fahrenheit !== "number") {
        return "O valor deve ser numérico";
    }

    const celsius = (fahrenheit - 32) / 1.8;

    return Number(celsius.toFixed(2));
}

console.log(celsiusParaFahrenheit(30));
console.log(fahrenheitParaCelsius(86));
