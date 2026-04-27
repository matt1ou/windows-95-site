function updateClock() {
  const now = new Date();
  const clockEl = document.getElementById('clock');
  if (clockEl) {
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    clockEl.textContent = displayHours + ':' + minutes + ' ' + ampm;
  }
}

setInterval(updateClock, 1000);
updateClock();

console.log('Windows 95 system loaded');