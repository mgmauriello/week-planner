/* exported data */

var data = {
  view: 'add-entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousData = localStorage.getItem('plan-local-storage');
if (previousData !== null) {
  data = JSON.parse(previousData);
}

function handleBeforeUnload(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('plan-local-storage', dataJSON);
}

window.addEventListener('beforeunload', handleBeforeUnload);
