/* exported data */

var data = {
  view: 'add-entry-form',
  entries: [{ day: 'Monday', time: '10:00AM', description: 'hello', entryId: 1 }, { day: 'Monday', time: '09:00AM', description: 'hello00', entryID: 2 }],
  editing: null,
  nextEntryId: 3
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
