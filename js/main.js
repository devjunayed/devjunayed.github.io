const sectionsId = ["home", "about-me", "skills", "services", "portfolio", "contact"];

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

