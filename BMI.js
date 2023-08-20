function bmiCalculator(weight, height) {
    var BMI =(weight / (height * 2));
    return BMI;
}

function calculateBMI(event) {
    event.preventDefault();

    var weightInput = document.getElementById("weight");
    var heightInput = document.getElementById("height");
    var resultDiv = document.getElementById("result");

    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height)) {
        resultDiv.innerText = "Please enter valid weight and height.";
        return;
    }

    var BMI = bmiCalculator(weight, height);
    resultDiv.innerText = "Your BMI is: " + BMI;
}
