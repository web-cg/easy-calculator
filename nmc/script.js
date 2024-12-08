let display = document.getElementById('display');
let history = [];

// Funktion zum Hinzufügen von Zeichen zum Display
function appendToDisplay(value) {
    if (display.value === 'Fehler' || display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Funktion zum Löschen des Displays
function clearDisplay() {
    display.value = '';
}

// Funktion zum Löschen des letzten Zeichens
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Funktion zum Berechnen des Ergebnisses
function calculateResult() {
    try {
        // Berechnung sicher durchführen mit math.js
        display.value = math.evaluate(display.value).toString();
        history.push(display.value); // Speichert das Ergebnis
    } catch (error) {
        display.value = 'Ungültiger Ausdruck';
    }
}

// Tastaturunterstützung hinzufügen
document.addEventListener('keydown', function (event) {
    const key = event.key;

    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', '(', ')', '^', '%'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '±') {
        toggleSign();
    }
});

// Funktion für das Umschalten des Vorzeichens (±)
function toggleSign() {
    if (display.value) {
        display.value = display.value[0] === '-' ? display.value.substring(1) : '-' + display.value;
    }
}
