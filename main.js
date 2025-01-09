quote = document.getElementsByClassName("advice-text");
num = document.getElementsByClassName("advice-num");
dice = document.getElementsByClassName("dice");

dice[0].addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      quote[0].innerHTML = data.slip.advice;
      num[0].innerText = data.slip.id; //data.slip.id;
    })
    .catch((error) => {
      console.log(error);
    });
})