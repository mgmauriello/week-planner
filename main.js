var $addEntry = document.querySelector('.add-entry');
// var $submitButton = document.querySelector('.add-entry-submit');
var $modalContainer = document.querySelector('.modal-container');
var $modalOverlay = document.querySelector('.modal-overlay');

var formBoolean = false;

function clickAddEntry(event) {
  if (formBoolean === false) {
    $modalContainer.className = 'modal-container';
    $modalOverlay.className = 'modal-overlay';
    formBoolean = true;
  }

}

$addEntry.addEventListener('click', clickAddEntry);
