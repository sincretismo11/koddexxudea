function operar() {
    var a = parseInt(document.getElementById("first_value").value);
    var b = parseInt(document.getElementById("second_value").value);
    var op = document.getElementById("op").value;
    var answer;
    switch (op) {
    case "/":
        answer = a / b;
        break;
    case "*":
        answer = a * b;
        break;
    case "-":
        answer = a - b;
        break;
    case "+":
        answer = a + b;
        break;
    default:
        answer = "Operation not available";
    }
    /*alert(answer);*/
    document.getElementById("answer").value = answer;
}
