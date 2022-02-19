/* exported data */

var data = {
  view: 'add-entry-form',
  entries: [{ day: 'Monday', time: '10:00AM', description: 'hi', entryId: 1 },
    { day: 'Tuesday', time: '10:00AM', description: 'hi', entryId: 2 },
    { day: 'Wednesday', time: '10:00AM', description: 'hi', entryId: 3 },
    { day: 'Thursday', time: '10:00AM', description: 'hi', entryId: 4 },
    { day: 'Friday', time: '10:00AM', description: 'hi', entryId: 5 },
    { day: 'Saturday', time: '10:00AM', description: 'hi', entryId: 6 },
    { day: 'Sunday', time: '10:00AM', description: 'hi', entryId: 7 }],
  editing: null,
  nextEntryId: 8
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
