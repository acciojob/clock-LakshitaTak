function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based, so we add 1
  const year = date.getFullYear().toString().slice(-2);
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'AM' : 'PM';

  return `${month}/${day}/${year}, ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)} ${ampm}`;
}

function formatTime(time) {
  return time.toString().padStart(2, '0');
}

function updateTime() {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  const currentTime = document.getElementById("timer")
  currentTime.innerText = formattedDate
}

setInterval(updateTime,1000)
