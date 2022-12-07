function check_month() {
        let month =+document.getElementById("month").value;
        switch (month) {
        case 1:
        case 3:
        case 5:
        case 8:
        case 10:
        case 12:
            alert("tháng có 31 ngày") + month;
            break;
        case 2:
            alert("tháng có 28 hoặc 29 ngày") + month;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            alert("tháng có 30 ngày") + month;
            break;
            default:
             alert("nhập sai");
            break;
    }
}
