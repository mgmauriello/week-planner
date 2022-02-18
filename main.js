var $addEntry = document.querySelector('.add-entry');
var $submitButton = document.querySelector('.add-entry-submit');
var $modalContainer = document.querySelector('.modal-container');
var $modalOverlay = document.querySelector('.modal-overlay');
var $addEntryForm = document.querySelector('#add-entry-form');

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
}

$addEntry.addEventListener('click', clickAddEntry);
$submitButton.addEventListener('click', clickSubmit);
