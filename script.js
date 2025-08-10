// Example of a JavaScript function to handle the CPC calculator on the page
function calculateCPC() {
    var budget = document.getElementById('cpc-budget').value;
    var clicks = document.getElementById('cpc-clicks').value;
    var cpc = budget / clicks;
    document.getElementById('cpc-result').innerText = "Your Cost Per Click (CPC) is: $" + cpc.toFixed(2);
}
