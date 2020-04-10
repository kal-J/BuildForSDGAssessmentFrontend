import covid19ImpactEstimator from "./estimator.js";
const handleInput = () => {
  let population = document.querySelector('input[name="population"]').value;
  let reportedCases = document.querySelector('input[name="reportedCases"]').value;
  let totalHospitalBeds = document.querySelector(
    'input[name="totalHospitalBeds"]'
  ).value;
  let periodType = document.querySelector('select[name="periodType"]').value;
  let timeToElapse = document.querySelector('input[name="timeToElapse"]').value;

  let input_data = {
    region: {
        name: "africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71,
    },
    periodType: periodType,
    timeToElapse: parseInt(timeToElapse),
    reportedCases: parseInt(reportedCases),
    population: parseInt(population),
    totalHospitalBeds: parseInt(totalHospitalBeds)
}

console.log(covid19ImpactEstimator(input_data));

};

const onSubmit = () => {
    document.querySelector('button[data-go-estimate]').onclick=()=>handleInput();
}
window.onload = onSubmit;
