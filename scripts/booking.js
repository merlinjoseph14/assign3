/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let perDayCost = 0;
let halfDay = false;
let numberDaysSelected = 0;
let daysClicked = [];


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function updateDayClick(event) {
    let dayClicked = event.target;

    if (!dayClicked.classList.contains('clicked')) {
        dayClicked.classList.add('clicked');
        numberDaysSelected++;
        daysClicked.push(dayClicked.textContent);
        calculatedCost();
    }
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function daysCleared() {
    let bookingDayButtons = document.querySelectorAll('.day-button');
    bookingDayButtons.forEach(day => day.classList.remove('clicked'));
    numberDaysSelected = 0;
    daysClicked = [];
    costCalculated();
}

document.getElementById('clear-button').addEventListener('click', daysCleared);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function changeRate(event) {
    let buttonClicked = event.target;

    if (buttonClicked.classList.contains('half') && !halfDay) {
        halfDay = true;
        perDayCost = 10;
        clickedButton.classList.add('clicked');
        document.querySelector('.full').classList.remove('clicked');
        costCalculated();
    } else if (clickedButton.classList.contains('full') && halfDay) {
        halfDay = false;
        perDayCost = 20;
        clickedButton.classList.add('clicked');
        document.querySelector('.half').classList.remove('clicked');
        costCalculated();
    }
}

let bookingDayButtons = document.querySelectorAll('.day-button');
bookingDayButtons.forEach(day => day.addEventListener('click', updateDayClick));

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function updateRateChange(event) {
    let clickedButton = event.target;

    if (buttonClicked.classList.contains('half') && !halfDay) {
        halfDay = true;
        perDayCost = 10;
        clickedButton.classList.add('clicked');
        document.querySelector('.full').classList.remove('clicked');
        costCalculated();
    }
}

let rateChangeButtons = document.querySelectorAll('.rate-button');
rateChangeButtons.forEach(rate => rate.addEventListener('click', updateRateChange));


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function totalCost() {
    let calculatedCost =  costPerDay * numberDaysSelected;
    document.getElementById('calculated-cost').innerHTML = '$${calculatedCost}';
}