

  let a;
  let date;
  const options = {weekday: 'long', month: 'long', year: 'numeric', day:'numeric'};
  setInterval(() => {
  a = new Date();
  date = a.toLocaleDateString(undefined, options);
  time = a.getHours() + `:` + a.getMinutes() + `:`+ a.getSeconds();
  document.getElementById('time').innerHTML = time +  "<br> on "  + date;
  },1000);