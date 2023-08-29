var today = new Date();
var oldDate = new Date(2021, 7, 21);

var last_job_date_diff = "July 2021 - Present (" + date_diff_calc(oldDate, today) + ")"
document.getElementById("dateValue").innerHTML = last_job_date_diff;

function date_diff_calc(d1, d2) {
    let d1Y = d1.getFullYear();
    let d2Y = d2.getFullYear();
    let d1M = d1.getMonth();
    let d2M = d2.getMonth();

    let total_months = (d2M + 12 * d2Y) - (d1M + 12 * d1Y) + 1;

    let years = Math.floor(total_months / 12)
    let months = total_months - years * 12;

    if (years === 0) {
        return months + " mos";
    }
    else {
        return years + " yr " + months + " mos";
    }
}






