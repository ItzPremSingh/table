function generateTable() {
    const number = parseInt(document.getElementById('numberInput').value);
    const table = document.getElementById('multiplicationTable');
    table.innerHTML = '';

    if (!isNaN(number)) {
        let headerRow = `<tr><th>Multiplication</th><th>Result</th></tr>`;
        table.insertAdjacentHTML('beforeend', headerRow);

        for (let i = 1; i <= 10; i++) {
            let row = `<tr><td>${number} x ${i}</td><td>${number * i}</td></tr>`;
            table.insertAdjacentHTML('beforeend', row);
        }
    } else {
        alert('Please enter a valid number.');
    }
}
