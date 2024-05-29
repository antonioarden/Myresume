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

function snapJobs() {
  window.open(
    "https://www.figma.com/proto/qzDd6Rhf03IV9RIlMe5SKm/snapjobs?page-id=139%3A499&type=design&node-id=140-499&viewport=582%2C626%2C0.08&t=X6cOiWQRL7RTOTMt-1&scaling=scale-down&starting-point-node-id=140%3A499&show-proto-sidebar=1"
  );
}
function xxiRedesign() {
  window.open(
    "https://www.figma.com/proto/jL6hXhuHJPsGWsKZJn1H6A/XXI-Redesign?page-id=0%3A1&type=design&node-id=132-436&viewport=179%2C1801%2C0.25&t=7TNEm3sWXzNN5Ztd-1&scaling=scale-down&starting-point-node-id=120%3A204&show-proto-sidebar=1"
  );
}
function jucyJooz() {
  window.open(
    "https://www.figma.com/proto/3cuJbxPEN9u3ktgq7guMld/JucyJooz?page-id=0%3A1&type=design&node-id=5-188&viewport=819%2C328%2C0.09&t=haHyZLP5hDxI2A9d-1&scaling=contain&starting-point-node-id=5%3A188&show-proto-sidebar=1"
  );
}
