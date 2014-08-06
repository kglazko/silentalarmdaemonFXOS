'use strict';

window.onload = function() {
  var button = document.getElementById('start');
  button.addEventListener('click', function() {
  var hours = document.getElementById('hr').value;
  var repeat = document.getElementById('repeat').value;
  var currentTime = new Date();
  // Let's schedule the daemon now
  for (var i = 0; i<repeat; i++)
    {
	currentTime.setHours(currentTime.getHours()+ hours);
	// This is arbitrary data pass to the alarm
	var data    = {
  	foo: "bar"
	}

  // The "honorTimezone" string is what make the alarm honoring it
  var request = navigator.mozAlarms.add(currentTime, "honorTimezone", data);
  request.onsuccess = function () {
  	console.log("The alarm has been scheduled");
	};
	request.onerror = function () { 
  	console.log("An error occurred: " + this.error.name);
	};
   }

  });
};
