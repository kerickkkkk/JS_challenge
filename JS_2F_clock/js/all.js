"use strict";

var numberclock = document.querySelector('.numberclock');
var hourHand = document.querySelector('.hour-hand');
var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.minute-hand');

(function getTime() {
  var dt = new Date();
  var h = dt.getHours();
  var m = dt.getMinutes();
  var s = dt.getSeconds();
  numberclock.innerHTML = "".concat(h, " : ").concat(m, " : ").concat(s);
  var hdeg = 360 / 12 * h - 90;
  hourHand.style.transform = "rotate(".concat(hdeg, "deg)");
  var mdeg = 360 / 60 * m + 180;
  minuteHand.style.transform = "rotate(".concat(mdeg, "deg)");
  var sdeg = 360 / 60 * s + 180;
  secondHand.style.transform = "rotate(".concat(sdeg, "deg)");
  setTimeout(getTime, 1000);
})();
//# sourceMappingURL=all.js.map
