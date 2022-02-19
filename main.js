/* global data */
/* exported data */

var $addEntry = document.querySelector('.add-entry');
var $submitButton = document.querySelector('.add-entry-submit');
var $modalContainer = document.querySelector('.modal-container');
var $modalOverlay = document.querySelector('.modal-overlay');
var $addEntryForm = document.querySelector('#add-entry-form');
var $calendar = document.querySelector('.calendar');
var $daysBox = document.querySelectorAll('.days-box');
var $scheduleHead = document.querySelector('.schedule-head');
var $table = document.querySelector('table');

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
  formBoolean = false;
}

$addEntry.addEventListener('click', clickAddEntry);
$submitButton.addEventListener('click', clickSubmit);

function handleCalendarViewSwap(event) {
  if (!event.target.matches('.days-box')) {
    return;
  }

  for (var i = 0; i < $daysBox.length; i++) {
    if (event.target.textContent === $daysBox[i].textContent) {

    }
  }
}

function renderTable() {
  var $tableBody = document.querySelector('tbody');
  var $tableRow = document.createElement('tr');
  var $tableDataTime = document.createElement('td');
  var $tableDataDescription = document.createElement('td');

  $table.appendChild($tableBody);
  $tableBody.appendChild($tableRow);
  $tableRow.appendChild($tableDataTime);
  $tableRow.appendChild($tableDataDescription);
  $tableDataTime.textContent = '10:00';
  $tableDataDescription.textContent = 'welcome back jeffi';

  return $tableBody;
}

window.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    if (event.target.value === data.entries.day) {
      // var entriesData = renderTable(data.entries[i]);
      // $table.appendChild(entriesData);
      console.log;
    }
  }
});

$calendar.addEventListener('click', handleCalendarViewSwap);
