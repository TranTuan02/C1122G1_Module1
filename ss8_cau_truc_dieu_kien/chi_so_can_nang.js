function checkBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    alert("can nang la " + weight);
    alert("chieu cao la " + height);
    let bmi = weight / (height * height);
    document.getElementById("result").innerHTML = "ket qua la" + bmi;

    if (bmi < 18) {
        document.getElementById("result").innerHTML = "chi so bmi" + bmi + "beo phi cap do 1";
    } else if (bmi < 25) {
        document.getElementById("result").innerHTML = "chi so bmi" + bmi + "beo phi cap do 2";
    } else if (bmi < 30) {
        document.getElementById("result").innerHTML = "chi so bmi" + bmi + "beo phi cap do 3";
    } else (bmi >= 30)
    {
        document.getElementById("result").innerText = "chi so bmi" + bmi + " beo phi cap do 4";
    }
}