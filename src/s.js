let imgs = document.querySelectorAll("#preview_img");
let next_btn = document.getElementById("next");
let prev_btn = document.getElementById("prev");
let index = 0;
// prev btn active---------------------------
prev_btn.addEventListener("click", () => {
  if (index == 0) {
    index = 2;
  } else {
    index--;
  }
  imgs.forEach((e) => {
    e.classList.add("inactive");
  });
  imgs[index].classList.remove("inactive");
  // hide text info
  UpdateData()
});
// next btn active---------------------
next_btn.addEventListener("click", () => {
  index++;
  if (index == 3) {
    index = 0;
  }
  imgs.forEach((preview, i) => {
    preview.classList.add("inactive");
  });
  imgs[index].classList.remove("inactive");
  UpdateData()
});
// imgs info text-----------------------
let heading_text = document.getElementById("heading");
let desc_text = document.getElementById("info");
let link_item = document.getElementById("item_link");
// ARRAY THAT HAVE ALL THE ITEMS INFORMATION TEXT------------------
let items_informations = [
  (img1 = {
    header: "Discover innovative ways to decorate.",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    link: "",
  }),
  (img2 = {
    header: "We are available all across the globe.",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    link: "",
  }),
  (img3 = {
    header: "Manufactured with the best materials.",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    link: "",
  }),
];
// function that change the text info and style
// --------------------------
function UpdateData(){
  // hide text info
  heading_text.classList.add("hidden");
  desc_text.classList.add("hidden");
  link_item.classList.add("hidden");
  setTimeout(() => {
    heading_text.classList.remove("hidden");
    desc_text.classList.remove("hidden");
    link_item.classList.remove("hidden"); 
    // update text info
    heading_text.innerHTML = `${items_informations[index].header}`;
    desc_text.innerHTML = `${items_informations[index].description}`;
  }, 1000);

} 
// -------change the bg div-------

function ChangeBg(){
  document.getElementById("dark").style.height="0"
  document.getElementById("light").style.height="0"
  document.getElementById("head").style.maxHeight="130px"
  document.getElementById("dis").style.maxHeight="130px"
  document.getElementById("dis2").style.maxHeight="130px"
}
