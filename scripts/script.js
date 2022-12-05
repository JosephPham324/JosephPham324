const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransition() {
  //Click to make btn active
  sectBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector(".active-btn").classList.remove("active-btn");//Remove active state of current active button
      btn.classList.add('active-btn');//Add active state to clicked button
      let contentID = btn.dataset.id;

      document.querySelector('.section.active').classList.remove('active')
      document.querySelector('#'+contentID).classList.add('active')
    });
  });


}

pageTransition()