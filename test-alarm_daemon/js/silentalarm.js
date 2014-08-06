'use strict';

window.onload = function() {
    var button = document.getElementById('start');
    var tempH;
    console.log("HI?");
    button.addEventListener('click', function() {
        console.log("HELLO?");

        var hours = document.getElementById('hr').value;
        var repeat = document.getElementById('repeat').value;
        var alarmTime = new Date();
        // This is arbitrary data pass to the alarm
        var data = {
                foo: "bar"
        }
        // Let's schedule the daemon now
        for (var i = 0; i < repeat; i++) {
            alarmTime.setHours(currentTime.getHours() + hours);

            // The "honorTimezone" string is what make the alarm honoring it
            var request = navigator.mozAlarms.add(alarmTime, "honorTimezone", data);

            request.onsuccess = function() {
                console.log("The alarm has been scheduled");
            };

            request.onerror = function() {
                console.log("An error occurred: " + this.error.name);
            };
        }

    });
};
