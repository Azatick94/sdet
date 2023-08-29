var current_year = new Date().getFullYear();
var first_year = '2018';

var total_years = parseInt(current_year) - parseInt(first_year);
console.log('total years = ' + total_years);

let experienceElement = document.getElementById("total_years");
experienceElement.innerHTML = experienceElement.innerHTML.replace('totalyears', total_years);

