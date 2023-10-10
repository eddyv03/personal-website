// typing text hero
const typed = new Typed(".typing-text", {
  strings: ["Front-End Web Developer", "UI/UX Designer", "a Student"],
  loop: true,
  typeSpeed: 55,
  backSpeed: 25,
  backDelay: 500,
});

// auto hide navbar click
$(".click-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
});

// automatic transparent navbar
const navBar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 1) {
    navBar.classList.replace("bg-transparent", "navbar-color");
  } else if (this.window.scrollY <= 0) {
    navBar.classList.replace("navbar-color", "bg-transparent");
  }
});

// fetchData API
async function fetchData(type = "certification") {
  let response;
  type === "certification"
    ? (response = await fetch("certification/certification.json"))
    : (response = await fetch("project/project.json"));
  const data = await response.json();
  return data;
}

function showProject(project) {
  let projectContainer = document.querySelector(".project .content");
  let projectHTML = "";
  project.slice(0, 90).forEach((project) => {
    projectHTML += `
        <div class="cards" >
    <img draggable="false" src="${project.image}" alt=""/>
    <div class="desc-content d-flex flex-column text-justify">
        <div class="tag">
            <h3>${project.title}</h3>
            <h5>${project.tech}</h5>
        </div>
        <div class="desc">
            <p>
            ${project.desc}
            </p>
            <div class="btns">
                <a
                    href="${project.links.code}"
                    class="btn"
                    target="_blank">
                    <i class="fas fa-code"></i>
                    Code
                </a>
            </div>
        </div>
    </div>
</div>`;
  });
  projectContainer.innerHTML = projectHTML;
}
fetchData("project").then((data) => {
  showProject(data);
});

// loadmore button
const loadmore = document.querySelector(".loadmore-btn");

// animate on scroll (AOS)
AOS.init();

document.onkeydown = function (e) {
  if (event) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
};

// Scrollspy botstrap
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: ".navbar",
});
