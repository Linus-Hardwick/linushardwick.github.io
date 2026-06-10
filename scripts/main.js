const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images\download.jpg") {
    myImage.setAttribute("src", "https://charlotteslivelykitchen.com/wp-content/uploads/2016/07/Butter-11.jpg");
  } else {
    myImage.setAttribute("src", "images\download.jpg");
  }
});
