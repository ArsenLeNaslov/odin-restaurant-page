import "./style.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContactPage from "./contact";
console.log("Our Offer"); 
const btns = document.querySelectorAll("button");
const active = document.querySelector(".active");
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    let move = (100 / btns.length) * i;
    active.style.left = move + "%";
  };
}
const content = document.querySelector("#content");
function cleanContent() {
  content.innerHTML = "";
}
const html = document.body;
function clearBackgroundClasses(element){
  element.classList.remove("homepage-img");
}
const tabs = document.querySelector(".tabs");
tabs.addEventListener("click", (event) => {
  let target = event.target;
  switch (target.id) {
    case "home":
      cleanContent();
      clearBackgroundClasses(html);
      html.classList.add('homepage-img');
      loadHome(content);
      break;
    case "menu":
      cleanContent();
      clearBackgroundClasses(html);
      loadMenu(content);
      break;
    case "contact":
      cleanContent();
      clearBackgroundClasses(html);
      loadContactPage(content);
      break;
  }
});
loadHome(content);
