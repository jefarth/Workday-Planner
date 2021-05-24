// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


// Scroll down to see timeblocks for standard business hours
// Each timeblock is color coded to indicate if it is in the past, present, or future
// Can click into a timeblock
// When clicked user can enter an event into a timeblock
// Create a save button for that timeblock
// Save user text for the timeblock in local storage
// User events saved and present when page refreshed


// Create grid element with 3 columns and 8 rows
// Create list elements to represent 9-5 workday for each hour
// Create a form and button element with each timeblock
// Save the user entered text to the field when the button is pressed
// Change color of the timeblocks to represent old, current, and future plans

// Creates a timeblock for the current day
const today = moment();
$(`#timeblock`).text(`Today is ` + today.format(`MMM Do, YYYY`));

// Create function on buttons to sumbit form data
const btn1 = $(`9am`);
btn1.onClick
function submitData() {
   
}

// Create a function to change the textbox color
// Loop through all the hours to check if the timeblock
// is before, equal, or after the current time

// ----------!!!!!!!!!!!!----------- Broken ---------!!!!!!!!!!-----------

// Creates a function to style the form page based on current hour
// const currentTime = moment().hour();

// function checkTime() {
//     let hours = $(`hours`);
//     // Loop through all the hour timeblocks
//     var i;
//     for (i = 0; i < hours.length; i++) {
//         if (currentTime === hours) {
//             $(`colorCode`).add(`present`);
//         } else if (currentTime < hours) {
//             $(`colorCode`).add(`past`);
//         } else (currentTime > hours) {
//             $(`colorCode`).add(`future`);
//         }    
// }};

// checkTime();