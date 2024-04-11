const getMessage = function () {
  let value = document.getElementById("message").value;
  console.log(value);
  document.getElementById("textMessage").textContent = value;
  var element = document.getElementById("textMessage");
  element.classList.add("textDisplayed");
  element.classList.remove("textHidden");
  document.getElementById("message").value = '';
};
