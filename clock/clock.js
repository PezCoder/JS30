;(function() {
  updateCurrentTime();
  setInterval(updateCurrentTime, 1000); // update every second

  function updateCurrentTime() {
    var currentTime = new Date();
    setSecond(currentTime.getSeconds());
    setMinute(currentTime.getMinutes());
    setHour(currentTime.getHours());
  }

  function setHour(hour_24_format) {
    var hourHand = document.getElementById('hour'),
      hour_12_format = hour_24_format % 12,
      rotate_deg = hour_12_format * (360/12);

    rotateTheHand(hourHand, rotate_deg);
  }

  function setMinute(minute) {
    var minuteHand = document.getElementById('minute'),
      rotate_deg = minute * (360/60); // 6deg each second

    rotateTheHand(minuteHand, rotate_deg);
  }

  function setSecond(second) {
    var secondHand = document.getElementById('second'),
      rotate_deg = second * (360/60); // 6deg each second

    rotateTheHand(secondHand, rotate_deg);
  }

  function rotateTheHand(hand, deg) {
    var rotate_from_start = deg + 90 // +90 is default rotation to keep it at 0
    hand.style.transform = `rotateZ(${rotate_from_start}deg)`;
  }
}());
