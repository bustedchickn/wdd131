function updateImages() {
  const width = window.innerWidth;
  const images = document.getElementsByTagName("img");

  if (width < 900 && width > 600) {
    for (let image of images) {
      image.src = "norris-full.jpeg";
    }
  } else {
    for (let image of images) {
      image.src = "norris-sm.jpeg";
    }
  }
}

const menulist = document.getElementById("menulist");

function toggleMenu() {
  if (menulist.style.display === "block") {
    menulist.style.display = "none";
  } else {
    menulist.style.display = "block";
  }
}


updateImages();


window.addEventListener("resize", updateImages);

const menubutton = document.getElementById("menu");
menubutton.addEventListener("click", toggleMenu);
