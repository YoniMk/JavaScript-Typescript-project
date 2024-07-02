// script.js
document.getElementById('calculatorForm').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent the default form submition

    //Get the input values
    var initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
    var monthlyContribution = parseFloat(document.getElementById('monthlyContribution').value);
    var annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value) / 100; // Convert percentage
    var investmentDuration = parseFloat(document.getElementById('investmentDuration').value);

    // Check if the input values are valid numbers
    if (!isNaN(initialInvestment) && !isNaN(monthlyContribution) && !isNaN(annualInterestRate) && !isNaN(investmentDuration)){
        // Calculate the future value using compound interest formula
        var n = 12; // compounded monthly
        var t = investmentDuration; //Time in years
        var futureValue = initialInvestment * Math.pow(1+ (annualInterestRate / n), n * t) + (monthlyContribution * ((Math.pow(1 +(annualInterestRate / n), n* t) - 1) / (annualInterestRate / n )));

        // Display the future value on the web page
        document.getElementById('futureValue').textContent = "Your future value after" + investmentDuration + "year is: $" + futureValue.toFixed(2);
    } else {
        // Display an error message for invalid inputs
        document.getElementById('futureValue').textContent = "Please enter valid number for all fields.";
    }

    // Reset the form
    document.getElementById('calculatorForm').reset();

});