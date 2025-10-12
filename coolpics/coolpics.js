var listState = null;

function updateImages() {
  const width = window.innerWidth;
  const images = document.getElementsByClassName("display-image");
  // var mod = true;

  if (width < 900 && width > 600) {
    for (let image of images) {
      image.src = "norris-full.jpeg";
    }
  } else {
    for (let image of images) {
      image.src = "norris-sm.jpeg";
    }
  }
  if (width > 900) {
    
    menulist.style.display = "flex";
  } else {
    if (listState === "flex") menulist.style.display = "block";
    else menulist.style.display = listState;

  }
  // if (mod){
  //   for (let image of images) {
  //     image.addEventListener("click",blowUp)
  //   }
  // }
  




}

const menulist = document.getElementById("menulist");

function toggleMenu() {
  if (menulist.style.display === "block") {
    menulist.style.display = "none";
    listState = "none";
  } else {
    menulist.style.display = "block";
    listState = "block";
  }
}


const gallery = document.querySelector(".gallery");
gallery.addEventListener("click",blowUp);


function blowUp(event) {

  const selectedImage = event.target.closest("img");
  if(!selectedImage) return;
  const src = selectedImage.getAttribute("src");
  const alt = selectedImage.getAttribute("alt");

  const bigSrc = src.split('-')[0] + "-full.jpeg";
  
  const dialog = document.createElement("dialog");
  dialog.innerHTML = `
        <img src="${bigSrc}" alt="${alt}">
        <button class="close-viewer">×</button>
      `;
  document.body.appendChild(dialog);
  dialog.showModal();
  const closeBtn = dialog.querySelector(".close-viewer");
  closeBtn.onclick = () => dialog.close();
  dialog.addEventListener("close", () => dialog.remove());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  })
}



updateImages();


window.addEventListener("resize", updateImages);

const menubutton = document.getElementById("menu");
menubutton.addEventListener("click", toggleMenu);
