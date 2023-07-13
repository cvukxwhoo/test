const numberOneTriangle = document.getElementById("btn");

numberOneTriangle.addEventListener("click", (n) => {
  let star = "";
  for (i = 0; i < n - 1; i++) {
    star = "*";
    console.log(star);
  }
});
