/* MODAL window */
var writeUs = document.querySelector(".btn-write-us");
var modalPopup = document.querySelector(".modal");
var modalClose = modalPopup.querySelector(".btn-close");
var modalForm = modalPopup.querySelector(".write-us-form");
var writerName = modalPopup.querySelector(".name");
var writerEmail = modalPopup.querySelector(".email");
var writerMessage = modalPopup.querySelector(".message");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

writeUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopup.classList.add("modal-show");
    
    if (storage) {
        writerName.value = storage;
        writerEmail.focus();
    } else {
    writerName.focus();
    }
});

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopup.classList.remove("modal-show");
  });

modalForm.addEventListener("submit", function (evt) {
    if (!writerName.value || !writerEmail.value || !writerMessage.value) {
    evt.preventDefault();
    } else {
        localStorage.setItem("login", writerName.value);
        localStorage.setItem("login", writerEmail.value);
      }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        modalPopup.classList.remove("modal-show");
      }
    }
  });

  

/* SLIDER */  

var slides = document.querySelectorAll('.slider-page');
var dot = document.querySelectorAll('.slider-choice-item');

dot[0].onclick = function () {
  slides[1].classList.remove('slider-page-active');
  slides[2].classList.remove('slider-page-active');
  slides[0].classList.add('slider-page-active');
};


dot[1].onclick = function () {
  slides[0].classList.remove('slider-page-active');
  slides[2].classList.remove('slider-page-active');
  slides[1].classList.add('slider-page-active');
};

dot[2].onclick = function () {
  slides[0].classList.remove('slider-page-active');
  slides[1].classList.remove('slider-page-active');
  slides[2].classList.add('slider-page-active');
};

