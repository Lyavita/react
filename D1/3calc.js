function calc() {

    function vvod(argName) {
    arg = +prompt(`введите значение ${argName}.`);

        while ( !(isFinite(arg) && !!arg) ) {
            alert('некорректный ввод данных. ничего у нас с вам не получится...');
            arg = +prompt(`введите значение ${argName}.`);
        }
    return arg;
    }

    function doMath(arg1, arg2, operation) {
    
        switch (operation) {
            case "+":
            case "add":  
            rezult = arg1 + arg2;
            break;

            case "-":
            case "sub":
            rezult = arg1 - arg2;
            break;

            case "*":
            case "mult":
            rezult = arg1 * arg2;
            break;   

            case "/":
            case "div":
            rezult = arg1 / arg2;
            break;

            case "%":
            case "mod":
            rezult = arg1 % arg2;
            break;
        } 

    return rezult;
    }

let rezult;    
const x = vvod(`x`);
const y = vvod(`y`);
const matOper = prompt('какое математическое дейтвие вы хотите произвести - введите + или add, - или sub, * или mult, / или div, % или mod.');

while ( !((matOper === '+') || (matOper === 'add') || (matOper === '-') || 
        (matOper === 'sub') || (matOper === '*') || (matOper === 'mult') || 
        (matOper === '/') || (matOper === 'div') || (matOper === '%') || (matOper === 'mod') && !!matOper) ) {
    alert('некорректный ввод данных. ничего у нас с вам не получится...');
    matOper = prompt('какое математическое дейтвие вы хотите произвести - введите + или add, - или sub, * или mult, / или div, % или mod.');
}    

doMath(x, y, matOper);

return alert(`${x} ${matOper} ${y} = ${rezult}`);
}

calc();


