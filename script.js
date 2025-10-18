document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("time");
  if (!el) return;

  const pad = (n) => String(n).padStart(2, "0");

  function formatDate(d) {
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(
      d.getDate()
    )} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }

  function update() {
    el.textContent = formatDate(new Date());
  }

  update();
  setInterval(update, 1000); // setInterval runs this funciton every second so we h=can have that seconds counter
});
