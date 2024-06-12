function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById("year").textContent = new Date().getFullYear();

var animation = lottie.loadAnimation({
  container: document.getElementById("lottie-animation"), // Elemen HTML di mana animasi akan dirender
  renderer: "svg", // Tipe renderer, bisa 'svg', 'canvas', atau 'html'
  loop: true, // Apakah animasi harus loop
  autoplay: true, // Apakah animasi harus langsung berjalan
  path: "wait.json", // Path ke file animasi JSON
});

var links = [
  "https://www.figma.com/proto/qzDd6Rhf03IV9RIlMe5SKm/snapjobs?page-id=139%3A499&type=design&node-id=140-499&viewport=582%2C626%2C0.08&t=X6cOiWQRL7RTOTMt-1&scaling=scale-down&starting-point-node-id=140%3A499&show-proto-sidebar=1",
  "https://www.figma.com/proto/jL6hXhuHJPsGWsKZJn1H6A/XXI-Redesign?page-id=0%3A1&type=design&node-id=132-436&viewport=179%2C1801%2C0.25&t=7TNEm3sWXzNN5Ztd-1&scaling=scale-down&starting-point-node-id=120%3A204&show-proto-sidebar=1",
  "https://www.figma.com/proto/3cuJbxPEN9u3ktgq7guMld/JucyJooz?page-id=0%3A1&type=design&node-id=5-188&viewport=819%2C328%2C0.09&t=haHyZLP5hDxI2A9d-1&scaling=contain&starting-point-node-id=5%3A188&show-proto-sidebar=1",
  "https://antonioarden.github.io/Myresume/",
];

function linkProject(index) {
  window.open(links[index]);
}

var modal1 = document.getElementById("figmaModal");
var btn1 = document.getElementById("figma-btn");
var span1 = document.querySelector(".close[data-modal='myModal']");

btn1.onclick = function () {
  modal1.style.display = "block";
};

span1.onclick = function () {
  modal1.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal1) {
    modal1.style.display = "none";
  } else if (event.target === modal2) {
    modal2.style.display = "none";
  }
};

var modal2 = document.getElementById("codeModal");
var btn2 = document.getElementById("code-btn");
var span2 = document.querySelector(".close[data-modal='myModal2']");

btn2.onclick = function () {
  modal2.style.display = "block";
};

span2.onclick = function () {
  modal2.style.display = "none";
};
