document.getElementById('num1').addEventListener('input', calculate);
document.getElementById('num2').addEventListener('input', calculate);
document.getElementById('num3').addEventListener('input', calculate);

function calculate() {

    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);

    var sum = num1 + num2 + num3;
    var mean = sum / 3;
    var error1 = num1 - mean;
    var error2 = num2 - mean;
    var error3 = num3 - mean;
    var square_error1 = Math.pow(error1,2);
    var square_error2 = Math.pow(error2,2);
    var square_error3 = Math.pow(error3,2);
    var sum_error = square_error1 + square_error2 + square_error3;
    var uncert = Math.sqrt(sum_error / 6);

    document.getElementById('sum').innerHTML = `
        ${sum}
    `;
    document.getElementById('error1').innerHTML = `
        ${error1}
    `;
    document.getElementById('error2').innerHTML = `
        ${error2}
    `;
    document.getElementById('error3').innerHTML = `
        ${error3}
    `;
    document.getElementById('sqerr1').innerHTML = `
        ${square_error1}
    `;
    document.getElementById('sqerr2').innerHTML = `
        ${square_error2}
    `;
    document.getElementById('sqerr3').innerHTML = `
        ${square_error3}
    `;
    document.getElementById('sumerr').innerHTML = `
        ${sum_error}
    `;
    document.getElementById('mean').innerHTML = `
        ${mean}
    `;
    document.getElementById('uncert').innerHTML = `
        ${uncert}
    `;
}
