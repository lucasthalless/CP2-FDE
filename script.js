let display1 = "";
let display2 = "";
let operation = false;
let operator = "";

function updateDisplay () {
    document.getElementById("result").value = display1 + operator + display2;
}

function updateOperation(digit) {
    operation = true;
    operator = digit;
    updateDisplay()
}

function digit(digit) {
    if (isNaN(digit)) {
        updateOperation(` ${digit} `);
        return
    }

    if (operation) {
        display2 += digit;
    } else {
        display1 += digit;
    }
    updateDisplay();
}

function addFloat() {
    if (operation) {
        if (!display2.includes(".")) {
            display2 += ".";
        }
    } else {
        if (!display1.includes(".")) {
            display1 += ".";
        }
    }
    updateDisplay();
}

function clearAll() {
    display1 = "";
    display2 = "";
    operation = false;
    operator = "";
    updateDisplay();
}

function equals() {
    if (display1[display1.length-1] === ".") {
        display1.replace(".","")
    }

    if (display2[display2.length-1] === ".") {
        display2.replace(".","")
    }

    switch (operator) {
        case " x ":
            aux = Number(display1) * Number(display2)
            clearAll()
            display1 = aux
            updateDisplay()
            break;
    
        case " / ":
            aux = Number(display1) / Number(display2)
            clearAll()
            display1 = aux
            updateDisplay()
            break;
    
        case " + ":
            aux = Number(display1) + Number(display2)
            clearAll()
            display1 = aux
            updateDisplay()
            break;
    
        case " - ":
            aux = Number(display1) - Number(display2)
            clearAll()
            display1 = aux
            updateDisplay()
            break;

        default:
            break;
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.code
    console.log(key)
  
    switch (key) {
        case 'KeyX':
            digit("x")
            break
        case 'NumpadMultiply':
            digit("x")
            break
        case 'NumpadDivide':
            digit("/")
            break
        case 'NumpadSubtract':
            digit("-")
            break
        case 'NumpadAdd':
            digit("-")
            break
        case 'Equal':
            equals()
            break
        case 'NumpadEnter':
            equals()
            break
        case 'Enter':
            equals()
            break
        case 'Period':
            addFloat()
            break
        case 'Backspace':
            clearAll()
            break
        case 'Numpad1':
            digit("1")
            break
        case 'Numpad2':
            digit("2")
            break
        case 'Numpad3':
            digit("3")
            break
        case 'Numpad4':
            digit("4")
            break
        case 'Numpad5':
            digit("5")
            break
        case 'Numpad6':
            digit("6")
            break
        case 'Numpad7':
            digit("7")
            break
        case 'Numpad8':
            digit("8")
            break
        case 'Numpad9':
            digit("9")
            break
        case 'Digit1':
            digit("1")
            break
        case 'Digit2':
            digit("2")
            break
        case 'Digit3':
            digit("3")
            break
        case 'Digit4':
            digit("4")
            break
        case 'Digit5':
            digit("5")
            break
        case 'Digit6':
            digit("6")
            break
        case 'Digit7':
            digit("7")
            break
        case 'Digit8':
            digit("8")
            break
        case 'Digit9':
            digit("9")
            break
        case 'Digit0':
            digit("0")
            break
        case 'Numpad0':
            digit("0")
            break
    }
});