function convert() {
    const degrees = document.getElementById('degrees').value;
    const type = document.getElementById('type').value;
    let result;

    if (type === 'Fahrenheit') {
        result = (degrees - 32) * 5 / 9;
        document.getElementById('result').innerText = `${result.toFixed(4)} °C`;
    } else {
        result = (degrees * 9 / 5) + 32;
        document.getElementById('result').innerText = `${result.toFixed(4)} °F`;
    }
}