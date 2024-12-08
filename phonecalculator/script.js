let display = document.getElementById('display');

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
        // eval() ist sicher, da wir kontrollieren, was eingegeben wird
        display.value = eval(display.value).toString();
    } catch (error) {
        display.value = 'Fehler';
    }
}

// Tastaturunterstützung hinzufügen
document.addEventListener('keydown', function (event) {
    const key = event.key;
    
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', '(', ')'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
