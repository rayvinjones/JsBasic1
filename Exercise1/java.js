const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const resultSum = document.getElementById("sum");
const resulDiff = document.getElementById("diff");
const resultProd = document.getElementById("prod");
const resultQuo= document.getElementById("qou");
let sum = 0;


function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        resultSum.innerHTML = sum;
    }
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        diff = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        resulDiff.innerHTML = diff;
    } if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        prod = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        resultProd.innerHTML = prod;
    }

   if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
    qou = parseInt(num1Txt.value) * parseInt(num2Txt.value);
    resultQuo.innerHTML = qou;
}
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    resultSum.innerHTML = "";
    sum = 0;
    resulDiff.innerHTML = "";
    diff = 0;
    resultProd.innerHTML = "";
    prod = 0;
    resultQuo.innerHTML
    quo = 0;
}

