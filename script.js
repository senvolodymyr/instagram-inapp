const container = document.getElementById('app');

const locationObject = window.location;

container.innerHTML = JSON.stringify(locationObject, null, 2);
