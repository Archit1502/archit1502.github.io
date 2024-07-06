window.addEventListener('scroll', function () {
  var lines = document.querySelectorAll('.line');
  var scroll = window.scrollY;
  lines.forEach(function (line, index) {
    var offset = index % 2 === 0 ? scroll / 2 : -scroll / 2; // Alternating direction
    line.style.transform = 'translateX(' + offset + 'px)';
  });
});


function updateDateTime() {
  // Get current date and time
  let now = new Date();

  // Format date as "day, date month"
  let options = {
    weekday: 'long',
    // year: 'numeric', 
    month: 'long',
    day: 'numeric'
  };
  let formattedDate = now.toLocaleDateString('en-US', options);

  // Format time as "HH:mm:ss" (24-hour format)
  let formattedTime = now.toLocaleTimeString('en-US', { hour12: false });

  // Update the DOM elements
  document.getElementById('date').textContent = formattedDate;
  document.getElementById('time').textContent = formattedTime;
}

// Update date and time initially and then every second
updateDateTime();
setInterval(updateDateTime, 1000);