function Cong() {
    let numb1 = +document.getElementById("numb1").value;
    let numb2 = +document.getElementById("numb2").value;
    let result = numb1 + numb2;

    document.getElementById("result").innerHTML = "Kết quả là : " + result;

}

function Tru() {
    let numb1 = document.getElementById("numb1").value;
    let numb2 = document.getElementById("numb2").value;
    let result = numb1 - numb2;
    document.getElementById("result").innerHTML = "Kết quả là  : " + result;

}

function Nhan() {
    let numb1 = document.getElementById("numb1").value;
    let numb2 = document.getElementById("numb2").value;
    let result = numb1 * numb2;
    document.getElementById("result").innerHTML = "Kết quả là  : " + result;

}

function Chia() {
    let numb1 = document.getElementById("numb1").value;
    let numb2 = document.getElementById("numb2").value;
    let result = numb1 / numb2;
    document.getElementById("result").innerHTML = "Kết quả là  : " + result;

}