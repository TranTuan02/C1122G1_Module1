function ChangeMoney() {
    let FromCurrency=document.getElementById("From").value;
    let ToCurrency=document.getElementById("To").value;
    let Amount = document.getElementById("Amount").value;
    alert("amount la "+Amount)
    alert("from la "+FromCurrency)
    alert("to la "+ToCurrency)
    let result = 0;
    if (FromCurrency == "USD" && ToCurrency == "VND") {
        result = " result " + (Amount * 23000) + "VND";
    } else if (FromCurrency == "VND" && ToCurrency == "USD") {
        result = "result" + (Amount / 23000) + "USD";
    } else if (FromCurrency == "VND") {
        result = "result" + Amount + "VND";
    } else if (FromCurrency == "USD") {
        result = "result" + Amount + "USD";
    }
        document.getElementById("kQ").innerText = result;
}
