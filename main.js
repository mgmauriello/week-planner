/* global data */
/* exported data */

var $addEntry = document.querySelector('.add-entry');
var $submitButton = document.querySelector('.add-entry-submit');
var $modalContainer = document.querySelector('.modal-container');
var $modalOverlay = document.querySelector('.modal-overlay');
var $addEntryForm = document.querySelector('#add-entry-form');
// var $calendar = document.querySelector('.calendar');
// var $daysBox = document.querySelectorAll('.days-box');

var formBoolean = false;

function clickAddEntry(event) {
  if (formBoolean === false) {
    $modalContainer.className = 'modal-container';
    $modalOverlay.className = 'modal-overlay';
    formBoolean = true;
  }
}

function clickSubmit(event) {
  event.preventDefault();

  var obj = {};
  obj.day = $addEntryForm.elements['day-of-week'].value;
  obj.time = $addEntryForm.elements.time.value;
  obj.description = $addEntryForm.elements.description.value;
  obj.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(obj);
  $modalContainer.className = 'modal-container hidden';
  $modalOverlay.className = 'modal-overlay hidden';
  $addEntryForm.reset();
}

$addEntry.addEventListener('click', clickAddEntry);
$submitButton.addEventListener('click', clickSubmit);

// function handleCalendarViewSwap(event) {
//   if (!event.target.matches('.days-box')) {
//     return;
//   }

//   for (var i = 0; i < $daysBox.length; i++) {
//     if (event.target.textContent === $daysBox[i].textContent) {
//     }
//   }
// }

// $calendar.addEventListener('click', handleCalendarViewSwap);
