// const getElemId = (id) => document.getElementById(id);
// let btnsId = [];
// const sectionsId = ["home", "about-me", "", "", "", "contact"];

// const btnElements = document.querySelectorAll(".btm-nav")[0].children;

// for (let i = 0; i < btnElements.length; i++) {
//   btnsId.push(btnElements[i]["id"]);
// }

// for (const id of btnsId) {
//   getElemId(id).addEventListener("click", function () {
//    for(const btn of btnElements){
//     btn.classList.remove('active');
//    }
//    this.classList = "active";
// //    window.location = ``;
//    console.log(`#${sectionsId[i]}`);
//   });
// }


const sectionsId = ["home", "about-me", "services", "portfolio", "contact"];

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

const btnElements = document.querySelectorAll(".btm-nav")[0].children;

for (let i = 0; i < btnElements.length; i++) {
  btnElements[i].addEventListener("click", function () {
    const sectionId = sectionsId[i];
    scrollToSection(sectionId);
    for(const btn of btnElements){
        btn.classList.remove('active');
    }
    this.classList.add('active');
  });
}
