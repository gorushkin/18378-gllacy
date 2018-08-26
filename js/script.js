const LINK = document.querySelector('.feedback-button');
const POPUP = document.querySelector('.write-to-us');
const CLOSEBTN = document.querySelector('.write-to-us-close');

LINK.addEventListener('click', function(evt) {
  evt.preventDefault();
  POPUP.classList.add('show-modal');
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (POPUP.classList.contains("show-modal")) {
      POPUP.classList.remove("show-modal");
    }
  }
})

CLOSEBTN.addEventListener('click', function(evt) {
  evt.preventDefault();
  POPUP.classList.remove('show-modal');
})